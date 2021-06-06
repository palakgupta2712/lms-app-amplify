import React, { useContext, useEffect, useState } from "react";
import Announcement from "./Announcement";
import NewAnnouncement from "./NewAnnouncement";
import { DataStore, Predicates, SortDirection } from "@aws-amplify/datastore";
import { AnnouncementsModel, Course } from "../models";
import { useParams } from "react-router";
import { UserContext } from "../context/UserContext";

function AnnouncementList() {
  const { id } = useParams();
  const user = useContext(UserContext);
  const [announcements, setAnnouncements] = useState([]);
  const [courses, setCourses] = useState([]);
  useEffect(() => {
    getCourses();
    getAnnouncements();
    const subscription = DataStore.observe(AnnouncementsModel).subscribe(
      (msg) => {
        getAnnouncements();
      }
    );

    return () => subscription.unsubscribe();
  }, []);

  async function getCourses() {
    const models = await DataStore.query(Course, id);
    setCourses(models);
  }
  async function getAnnouncements() {
    const models = (
      await DataStore.query(AnnouncementsModel, Predicates.ALL, {
        sort: (s) => s.createdAt(SortDirection.DESCENDING),
      })
    ).filter((c) => c.courseID === id);

    setAnnouncements(models);
  }
  async function handleDelete(id) {
    const todelete = await DataStore.query(AnnouncementsModel, id);
    DataStore.delete(todelete);
  }
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      {courses.createdBy === user.username && <NewAnnouncement />}

      {announcements.map((announcement, index) => (
        <Announcement
          key={index}
          announcement={announcement}
          handleDelete={handleDelete}
        />
      ))}
    </div>
  );
}

export default AnnouncementList;

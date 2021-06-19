import React, { useContext, useEffect, useState } from "react";
import Announcement from "./Announcement";
import NewAnnouncement from "./NewAnnouncement";
import { DataStore, Predicates, SortDirection } from "@aws-amplify/datastore";
import { AnnouncementsModel } from "../../models";
import { useParams } from "react-router";
import { UserContext } from "../../context/UserContext";
import { Box, Typography } from "@material-ui/core";
import announcementImg from "../../assests/announcementImg.svg";
import useCourses from "../../customHook/useCourses";

function DisplayAnnouncement() {
  const { id } = useParams();
  const user = useContext(UserContext);
  const course = useCourses(id);
  const [announcements, setAnnouncements] = useState([]);

  useEffect(() => {
    async function getAnnouncements() {
      const models = (
        await DataStore.query(AnnouncementsModel, Predicates.ALL, {
          sort: (s) => s.createdAt(SortDirection.DESCENDING),
        })
      ).filter((c) => c.courseID === id);

      setAnnouncements(models);
    }
    getAnnouncements();
    const subscription = DataStore.observe(AnnouncementsModel).subscribe(
      (msg) => {
        getAnnouncements();
      }
    );

    return () => subscription.unsubscribe();
  }, [id]);

  async function handleDelete(id) {
    const todelete = await DataStore.query(AnnouncementsModel, id);
    DataStore.delete(todelete);
  }
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      {course.createdBy === user.username && user.isEducator && (
        <NewAnnouncement />
      )}
      {announcements.length > 0 ? (
        <>
          {announcements.map((announcement, index) => (
            <Announcement
              key={index}
              announcement={announcement}
              handleDelete={handleDelete}
            />
          ))}
        </>
      ) : (
        <Box align="center">
          <img
            src={announcementImg}
            alt="no-discussion"
            height="100%"
            width="60%"
          />
          <Typography variant="h5"> No Announcement posted!</Typography>
        </Box>
      )}
    </div>
  );
}

export default DisplayAnnouncement;

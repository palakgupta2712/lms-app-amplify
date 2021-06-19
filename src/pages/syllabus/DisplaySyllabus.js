import React, { useContext, useEffect, useState } from "react";
import { Container } from "@material-ui/core";
import nodata from "../../assests/nodata.svg";
import { DataStore } from "@aws-amplify/datastore";
import { SyllabusModel } from "../../models";
import { useParams } from "react-router";
import NewSyllabus from "./NewSyllabus";
import PreviewSyllabus from "./PreviewSyllabus";
import { UserContext } from "../../context/UserContext";
import useCourses from "../../customHook/useCourses";

function DisplaySyllabus() {
  const { id } = useParams();
  const course = useCourses(id);
  const user = useContext(UserContext);

  const [syllabus, setSyllabus] = useState([]);
  useEffect(() => {
    async function getSyllabus() {
      const models = (await DataStore.query(SyllabusModel)).filter(
        (c) => c.courseID === id
      );
      setSyllabus(models);
    }

    getSyllabus();
    const subscription = DataStore.observe(SyllabusModel).subscribe((msg) => {
      getSyllabus();
    });
    return () => subscription.unsubscribe();
  }, [id]);

  async function handleDelete(id) {
    const todelete = await DataStore.query(SyllabusModel, id);
    DataStore.delete(todelete);
  }
  return (
    <React.Fragment>
      <Container maxWidth="sm">
        {syllabus.length > 0 ? (
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              flexDirection: "row",
            }}
          >
            {syllabus.map((item, index) => (
              <div key={index} style={{ margin: "10px" }}>
                <PreviewSyllabus syllabus={item} handleDelete={handleDelete} />
              </div>
            ))}
          </div>
        ) : (
          <div>
            {user.username === course.createdBy && user.isEducator && (
              <NewSyllabus />
            )}
            <img src={nodata} alt="no-syllabus" style={{ padding: "20px" }} />
          </div>
        )}
      </Container>
    </React.Fragment>
  );
}

export default DisplaySyllabus;

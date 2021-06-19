import React, { useContext, useEffect, useState } from "react";
import { Box, Container } from "@material-ui/core";
import nodata from "../../assests/nodata.svg";
import { DataStore } from "@aws-amplify/datastore";
import { AssignmentModel } from "../../models";
import AddAssignment from "./AddAssignment";
import Assignment from "./Assignment";
import { useParams } from "react-router";
import { UserContext } from "../../context/UserContext";
import useCourses from "../../customHook/useCourses";

function DisplayAssignments() {
  const { id } = useParams();
  const user = useContext(UserContext);
  const course = useCourses(id);

  const [assignments, setAssignments] = useState([]);

  useEffect(() => {
    async function getAssignments() {
      const models = (await DataStore.query(AssignmentModel)).filter(
        (c) => c.courseID === id
      );
      setAssignments(models);
    }
    getAssignments();
    const subscription = DataStore.observe(AssignmentModel).subscribe((msg) => {
      getAssignments();
    });
    return () => subscription.unsubscribe();
  }, [id]);

  return (
    <React.Fragment>
      <Container maxWidth="sm">
        {user.username === course.createdBy && user.isEducator && (
          <Box style={{ margin: "50px 0px" }}>
            <AddAssignment />
          </Box>
        )}

        {assignments.length > 0 ? (
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              flexDirection: "row",
            }}
          >
            {assignments.map((assignment) => (
              <div style={{ margin: "10px" }}>
                <Assignment assignment={assignment} />
              </div>
            ))}
          </div>
        ) : (
          <img src={nodata} alt="no-syllabus" />
        )}
      </Container>
    </React.Fragment>
  );
}

export default DisplayAssignments;

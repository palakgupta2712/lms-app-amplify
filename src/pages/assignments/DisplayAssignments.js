import React, { useEffect, useState } from "react";
import { Box, Container } from "@material-ui/core";
import nodata from "../nodata.svg";
import { DataStore } from "@aws-amplify/datastore";
import { AssignmentModel } from "../../models";
import AddAssignment from "./AddAssignment";
import Assignment from "./Assignment";
import { useParams } from "react-router";

function DisplaySyllabus() {
  const { id } = useParams();
  const [assignments, setAssignments] = useState([]);
  useEffect(() => {
    getAssignments();
  }, []);
  async function getAssignments() {
    const models = (await DataStore.query(AssignmentModel)).filter(
      (c) => c.courseID === id
    );
    setAssignments(models);
  }
  return (
    <React.Fragment>
      <Container maxWidth="sm">
        <Box style={{ margin: "50px 0px" }}>
          <AddAssignment />
        </Box>

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
                {" "}
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

export default DisplaySyllabus;

import React, { useContext } from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { CourseContext } from "../../context/CourseContext";
import { Chip } from "@material-ui/core";
import LabelIcon from "@material-ui/icons/Label";
import { Link } from "react-router-dom";

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

export default function CustomizedTables() {
  const classes = useStyles();
  const courses = useContext(CourseContext);

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Course Title</StyledTableCell>
            <StyledTableCell align="center">Course Description</StyledTableCell>
            <StyledTableCell align="center">Status</StyledTableCell>
            <StyledTableCell align="center">Created on</StyledTableCell>
            <StyledTableCell align="center">Course Pin</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {courses.map((course, index) => (
            <>
              {course.status === "DRAFT" && (
                <StyledTableRow key={course.id}>
                  <Link to={`/course/${course.id}/`}>
                    <StyledTableCell
                      component="th"
                      scope="row"
                      style={{ fontWeight: "700", textDecoration: "underline" }}
                    >
                      {course.title}
                    </StyledTableCell>
                  </Link>
                  <StyledTableCell align="center">
                    {course.desc}
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    <Chip
                      icon={<LabelIcon style={{ color: "rgb(0, 123, 255)" }} />}
                      label={course.status}
                      variant="outlined"
                      style={{
                        border: "1px solid rgb(0, 123, 255)",
                        background: "rgb(0, 123, 255, 0.2)",
                      }}
                    />
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    {course.createdAt}
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    {
                      <Chip
                        label={course.coursePin}
                        color="primary"
                        style={{ letterSpacing: "2px" }}
                      />
                    }
                  </StyledTableCell>
                </StyledTableRow>
              )}
            </>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

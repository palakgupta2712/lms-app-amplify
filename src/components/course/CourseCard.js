import React, { useContext } from "react";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Typography,
} from "@material-ui/core";
import FavoriteBorderRoundedIcon from "@material-ui/icons/FavoriteBorderRounded";
import ShareLinkModal from "./ShareLinkModal";
import ReactHtmlParser from "react-html-parser";
import Avatar from "boring-avatars";
import { UserContext } from "../../context/UserContext";
import ContinueButton from "./ContinueButton";
import EnrollButton from "./EnrollButton";

function CourseCard({ course, handleUpdate }) {
  const user = useContext(UserContext);

  return (
    <div>
      <Card>
        <CardHeader
          avatar={
            <Avatar
              size={60}
              name={course.createdBy}
              variant="beam"
              colors={["#A70267", "#F10C49", "#FB6B41", "#F6D86B", "#339194"]}
            />
          }
          title={course.title}
          fontWeight="900"
          subheader={"By " + course.createdBy}
        />
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            Created on : {course.createdAt.split(",")[0]}
            {ReactHtmlParser(course.desc.length) > 80 ? (
              <div>{ReactHtmlParser(course.desc.substring(0, 80))}..</div>
            ) : (
              <div>{ReactHtmlParser(course.desc)}</div>
            )}
          </Typography>
        </CardContent>
        <CardActions
          style={{
            display: "flex",
            justifyContent: "space-between",
            padding: "14px",
          }}
        >
          <Button>
            <FavoriteBorderRoundedIcon />
          </Button>
          <ShareLinkModal id={course.id} />

          {course.enrolledStudents.includes(user.id) ? (
            <ContinueButton course={course} />
          ) : (
            <>
              {!user.isEducator && (
                <EnrollButton course={course} handleUpdate={handleUpdate} />
              )}
            </>
          )}
        </CardActions>
      </Card>
    </div>
  );
}

export default CourseCard;

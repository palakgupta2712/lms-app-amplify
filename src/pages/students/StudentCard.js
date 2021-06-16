import React from "react";
import { Card, CardHeader } from "@material-ui/core";

import Avatar from "boring-avatars";

function StudentCard({ user }) {
  return (
    <div>
      <Card>
        <CardHeader
          avatar={
            <Avatar
              size={60}
              name={user.username}
              variant="beam"
              colors={["#A70267", "#F10C49", "#FB6B41", "#F6D86B", "#339194"]}
            />
          }
          title={user.name}
          fontWeight="900"
          subheader={"@" + user.username}
        />
      </Card>
    </div>
  );
}

export default StudentCard;

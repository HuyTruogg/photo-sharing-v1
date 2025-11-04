import React from "react";
import { Typography } from "@mui/material";

import "./styles.css";
import { useParams, Link } from "react-router-dom";
import models from "../../modelData/models";

function UserDetail() {
  const { userId } = useParams();
  const user = models.userModel(userId);

  return (
    <div>
      <Typography variant="h5">
        {user.first_name} {user.last_name}
      </Typography>
      <Typography>
        <b>Địa điểm:</b> {user.location}
      </Typography>
      <Typography>
        <b>Nghề nghiệp:</b> {user.occupation}
      </Typography>
      <Typography>
        <b>Mô tả:</b>{" "}
        <span dangerouslySetInnerHTML={{ __html: user.description }} />
      </Typography>
      <Link to={`/photos/${user._id}`}>Xem ảnh của {user.first_name}</Link>
    </div>
  );
}

export default UserDetail;

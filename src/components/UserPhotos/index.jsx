import React from "react";
import { Typography } from "@mui/material";

import "./styles.css";
import { useParams, Link } from "react-router-dom";
import models from "../../modelData/models";

function UserPhotos() {
  const { userId } = useParams();
  const photos = models.photoOfUserModel(userId);
  const user = models.userModel(userId);

  return (
    <div>
      <Typography variant="h5">Ảnh của {user.first_name}</Typography>
      {photos.map((photo) => (
        <div key={photo._id} style={{ marginBottom: "20px" }}>
          <img
            src={`/images/${photo.file_name}`}
            alt="user upload"
            style={{
              maxWidth: "50%",
              height: "auto",
              borderRadius: "6px",
              display: "block",
              marginBottom: "8px",
            }}
          />

          <Typography variant="body2">
            {new Date(photo.date_time).toLocaleString()}
          </Typography>

          {photo.comments && photo.comments.length > 0 && (
            <div style={{ marginLeft: "20px" }}>
              <h4>Bình luận:</h4>
              {photo.comments.map((c) => (
                <div key={c._id} style={{ marginBottom: "10px" }}>
                  <Link to={`/users/${c.user._id}`}>
                    {c.user.first_name} {c.user.last_name}
                  </Link>{" "}
                  : <span dangerouslySetInnerHTML={{ __html: c.comment }} />
                  <br />
                  <small>{new Date(c.date_time).toLocaleString()}</small>
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default UserPhotos;

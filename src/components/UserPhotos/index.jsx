import React from "react";
import { Typography } from "@mui/material";

import "./styles.css";
import { useParams, Link } from "react-router-dom";
// import models from "../../modelData/models";
import fetchModel from "../../lib/fetchModelData";

function UserPhotos() {
  const { userId } = useParams();
  // const photos = models.photoOfUserModel(userId);
  // const user = models.userModel(userId);
  const [user, setUser] = React.useState(null);
  const [photos, setPhotos] = React.useState([]);
  React.useEffect(() => {
    fetchModel(`https://3wknrp-8081.csb.app/api/user/user/${userId}`).then(
      (res) => {
        if (res.data) setUser(res.data);
      }
    );

    fetchModel(
      `https://3wknrp-8081.csb.app/api/photo/photosOfUser/${userId}`
    ).then((res) => {
      if (res.data) setPhotos(res.data);
    });
  }, [userId]);
  if (!user) return <div>Đang tải...</div>;

  return (
    <div>
      <Typography variant="h5">Ảnh của {user.last_name}</Typography>
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

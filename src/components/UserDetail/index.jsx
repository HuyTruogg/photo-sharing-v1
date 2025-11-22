import React from "react";
import { Typography } from "@mui/material";

import "./styles.css";
import { useParams, Link } from "react-router-dom";
// import models from "../../modelData/models";
import fetchModel from "../../lib/fetchModelData";

function UserDetail() {
  // const { userId } = useParams();
  // const user = models.userModel(userId);
  const { userId } = useParams();
  const [user, setUser] = React.useState(null);

  React.useEffect(() => {
    fetchModel(`https://3wknrp-8081.csb.app/api/user/user/${userId}`).then(
      (res) => {
        if (res.data) {
          setUser(res.data);
        }
      }
    );
  }, [userId]);

  if (!user) return <div>Đang tải...</div>;
  return (
    <div>
      <Typography variant="h5">{user.last_name}</Typography>
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
      <Link to={`/photos/${user._id}`}>Xem ảnh của {user.last_name}</Link>
    </div>
  );
}

export default UserDetail;

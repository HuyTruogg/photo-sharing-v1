import React from "react";
import { Typography } from "@mui/material";

import "./styles.css";
import { useParams, Link } from "react-router-dom";
import models from "../../modelData/models";

function UserDetail() {
  const { userId } = useParams();
  const user = models.userModel(userId);

  if (!user) {
    return <Typography>Không tìm thấy người dùng.</Typography>;
  }

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

// import React from "react";
// import {Typography} from "@mui/material";

// import "./styles.css";
// import {useParams} from "react-router-dom";

// /**
//  * Define UserDetail, a React component of Project 4.
//  */
// function UserDetail() {
//     const user = useParams();
//     return (
//         <>
//           <Typography variant="body1">
//             This should be the UserDetail view of the PhotoShare app. Since it is
//             invoked from React Router the params from the route will be in property match.
//             So this should show details of user: {user.userId}.
//             You can fetch the model for the user from models.userModel.
//           </Typography>
//         </>
//     );
// }

// export default UserDetail;

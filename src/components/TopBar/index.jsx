import React from "react";
import { AppBar, Toolbar, Typography } from "@mui/material";

import "./styles.css";
import { useLocation, useParams } from "react-router-dom";
import models from "../../modelData/models";

function TopBar() {
  const location = useLocation();
  const { userId } = useParams();
  let rightText = "Photo Sharing App";

  if (
    location.pathname.startsWith("/users/") &&
    !location.pathname.includes("/photos/")
  ) {
    const user = models.userModel(userId);
    if (user) rightText = `${user.first_name} ${user.last_name}`;
  } else if (location.pathname.startsWith("/photos/")) {
    const user = models.userModel(userId);
    if (user) rightText = `Ảnh của ${user.first_name}`;
  }

  return (
    <AppBar position="absolute">
      <Toolbar>
        <Typography variant="h6" color="inherit" style={{ flexGrow: 1 }}>
          Nguyễn Trường Huy
        </Typography>
        <Typography variant="h6" color="inherit">
          {rightText}
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

export default TopBar;

// import React from "react";
// import { AppBar, Toolbar, Typography } from "@mui/material";

// import "./styles.css";

// /**
//  * Define TopBar, a React component of Project 4.
//  */
// function TopBar () {
//     return (
//       <AppBar className="topbar-appBar" position="absolute">
//         <Toolbar>
//           <Typography variant="h5" color="inherit">
//             This is the TopBar component
//           </Typography>
//         </Toolbar>
//       </AppBar>
//     );
// }

// export default TopBar;

import React from "react";
import { AppBar, Toolbar, Typography } from "@mui/material";

import "./styles.css";
import { useLocation, useMatch } from "react-router-dom";
import models from "../../modelData/models";

function TopBar() {
  const location = useLocation();

  const matchUserDetail = useMatch("/users/:userId");
  const matchUserPhotos = useMatch("/photos/:userId");
  const matchUserList = useMatch("/users");

  let rightText = "Photo Sharing App";

  if (matchUserDetail && matchUserDetail.params.userId) {
    const user = models.userModel(matchUserDetail.params.userId);
    if (user) {
      rightText = `${user.first_name} ${user.last_name}`;
    }
  } else if (matchUserPhotos && matchUserPhotos.params.userId) {
    const user = models.userModel(matchUserPhotos.params.userId);
    if (user) {
      rightText = `Ảnh của ${user.first_name}`;
    }
  } else if (matchUserList) {
    rightText = "Users";
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

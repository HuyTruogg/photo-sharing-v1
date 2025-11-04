import React from "react";
import {
  Divider,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";

import "./styles.css";
import models from "../../modelData/models";
import { Link } from "react-router-dom";

function UserList() {
  const users = models.userListModel();

  return (
    <div>
      <Typography variant="h6">Danh sách người dùng</Typography>
      <List component="nav">
        {users.map((user) => (
          <React.Fragment key={user._id}>
            <ListItem>
              <Link
                to={`/users/${user._id}`}
                style={{ textDecoration: "none" }}
              >
                <ListItemText
                  primary={`${user.first_name} ${user.last_name}`}
                />
              </Link>
            </ListItem>
            <Divider />
          </React.Fragment>
        ))}
      </List>
    </div>
  );
}

export default UserList;

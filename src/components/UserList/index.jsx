import React from "react";
import {
  Divider,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";

import "./styles.css";
// import models from "../../modelData/models";
import fetchModel from "../../lib/fetchModelData";
import { Link } from "react-router-dom";

function UserList() {
  // const users = models.userListModel();
  const [users, setUsers] = React.useState([]);

  React.useEffect(() => {
    fetchModel("https://3wknrp-8081.csb.app/api/user/user/list").then((res) => {
      if (res.data) setUsers(res.data);
    });
  }, []);
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
                <ListItemText primary={user.last_name} />
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

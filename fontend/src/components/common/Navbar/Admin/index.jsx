import { AppBar, Badge, Grid, IconButton } from "@mui/material";
import React, { Component } from "react";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

class Navbar extends Component {
  render() {
    return (
      <AppBar color="transparent" className="relative shadow-none">
        <nav className="h-12 justify-end border-b-2 flex items-center text-sm bg-white text-gray-600">
          <div className="flex p-5  items-center justify-end w-full h-full">
            <div className="flex items-center mr-5 text-sm">2022-07-23</div>
            <div className="flex items-center mr-5 text-sm">4.27 AM</div>
            <IconButton size="large" className="mr-5">
              <Badge
                badgeContent={4}
                color="error"
                className="flex items-center text-sm"
              >
                <NotificationsNoneOutlinedIcon color="action" />
              </Badge>
            </IconButton>
            {/* <IconButton size="large" className="mr-5"
            >
              <AccountCircleIcon />
            </IconButton> */}
          </div>
        </nav>
      </AppBar>
    );
  }
}
export default Navbar;

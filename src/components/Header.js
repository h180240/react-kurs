import * as React from "react";
import { AppBar, Toolbar, Typography } from "@mui/material";

export default function Header() {
  return (
    <AppBar position="static" sx={{
      backgroundColor: "#648be0"
    }}>
      <Toolbar>
        <Typography variant="h6" noWrap>
          Johannes 3.16
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

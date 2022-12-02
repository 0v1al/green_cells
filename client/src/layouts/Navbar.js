import React from "react";
import { NavLink } from "react-router-dom";

import { Box, AppBar, Toolbar, Typography, Button } from "@mui/material";

const Navbar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        component="nav"
        position="sticky"
        sx={{ backgroundColor: "primary.main" }}
      >
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            GreenCells
          </Typography>
          <Box>
            <NavLink to="/register">
              <Button
                color="inherit"
                sx={{ textTransform: "Capitalize", marginRight: "1rem" }}
              >
                Înregistrare
              </Button>
            </NavLink>
            <Button color="inherit" sx={{ textTransform: "Capitalize" }}>
              Conectare
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;

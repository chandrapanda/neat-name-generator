import * as React from "react";
import { Link, AppBar, Toolbar, Box, Grid } from "@mui/material";

const Navbar = () => {
  return (
    <AppBar position="static" sx={{ backgroundColor: "#131C47" }}>
      <Grid
        container
        position="relative"
        sx={{
          display: "contents",
          flexDirection: "row",
          width: "100%",
          justifyContent: "space-between",
        }}
      >
        <Box sx={{ position: "absolute", right: 0 }}>
          <img
            src="/images/mylogo.png"
            alt="Abstract colorful graphic"
            height="120px"
            width="auto"
          />
        </Box>
        <Toolbar disableGutters sx={{ p: 2 }}>
          {/* PAGE NAME. Left Side. */}
          <Grid item>
            <Link
              variant="h1"
              noWrap
              underline="none"
              color="#ffffff"
              href="/"
              sx={{
                mr: 10,
                display: { xs: "flex", sm: "flex", md: "flex", lg: "flex" },
              }}
            >
              Neat Name Generator
            </Link>
            <h2>Call on every student.</h2>
          </Grid>

          {/* Right Side. */}
          <Grid container sx={{ justifyContent: "end" }}></Grid>

          {/* TODO: MOBILE MENU*/}
          {/* Hamburger menu displays when screen is XS or S */}
          {/* <Box>
            <Tooltip title="Open pages">
              <MenuIcon
                onClick={handleOpenHamburgerMenu}
                sx={{
                  anchorEl: "right",
                  mr: 1,
                  display: {
                    xs: "flex",
                    sm: "flex",
                    md: "none",
                    lg: "none",
                  },
                }}
              />
            </Tooltip>
          </Box> */}
        </Toolbar>
      </Grid>
    </AppBar>
  );
};
export default Navbar;

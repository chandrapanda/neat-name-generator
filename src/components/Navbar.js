import * as React from "react";
import { Link, AppBar, Typography, Grid } from "@mui/material";

const Navbar = () => {
  return (
    <AppBar position="static" xs={12} sx={{ backgroundColor: "#131C47" }}>
      <Grid
        container
        position="relative"
        sx={{
          display: "contents",
          flexDirection: "row",
          width: "100%",
        }}
      >
        {/* <Box sx={{ alignSelf: "center", right: 0 }}>
          <img
            src="/images/mylogo.png"
            alt="Abstract colorful graphic"
            height="120px"
            width="auto"
          /> */}
        {/* </Box> */}
        <Grid item>
          <Link variant="h1" underline="none" color="#ffffff" href="/">
            Neat-o Name Generator
          </Link>
          <Typography variant="h2" margin="30px">
            Call on every student.
          </Typography>
        </Grid>

        {/* <Grid container sx={{ justifyContent: "end" }}></Grid> */}

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
      </Grid>
    </AppBar>
  );
};
export default Navbar;

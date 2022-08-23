import * as React from "react";

// MUI Imports
import {
  Container,
  Box,
  Grid,
  Typography,
  List,
  ListItem,
  Link,
} from "@mui/material";

const footerStyle = {
  container: {
    backgroundColor: "#131C47",
  },
  listText: {
    color: "#ffffff",
    textDecoration: "none",
    fontSize: "1em",
    fontFamily: "Helvetica, sans-serif",
    lineHeight: "1.6em",
    fontWeight: 100,
  },
};

const Footer = () => {
  return (
    <Container sx={footerStyle.container} maxWidth={false}>
      <Grid container spacing={9} sx={{ padding: 5, mt: 0.2 }}>
        <Grid item xs={12} sm={12} md={6} lg={6}>
          <Box>
            <Typography variant="h1" color="primary.contrastText">
              Neat Name Generator
            </Typography>
            <Typography
              variant="p"
              color="primary.contrastText"
              sx={footerStyle.listText}
            >
              Use this app to call on students at random in your class! This
              way, all your students participate equally.
            </Typography>
          </Box>
        </Grid>

        <Grid item xs={6} sm={6} md={3} lg={3}>
          <Typography variant="h3" color="primary.contrastText">
            Meet the Developer
          </Typography>

          <List>
            <Link
              href="https://github.com/chandrapanda"
              sx={footerStyle.listText}
              rel="noopener noreferrer"
              target="_blank"
            >
              <ListItem button component="a" disableGutters>
                Chandra Holt
              </ListItem>
            </Link>
          </List>
        </Grid>

        {/* QUICK LINKS */}
        <Grid item xs={6} sm={6} md={3} lg={3}>
          <Typography variant="h3" color="primary.contrastText">
            Quick Links
          </Typography>

          <List>
            <Link href="/" passhref="true" sx={footerStyle.listText}>
              <ListItem button component="a" disableGutters>
                Home
              </ListItem>
            </Link>

            <Link href="/login" passhref="true" sx={footerStyle.listText}>
              <ListItem button component="a" disableGutters>
                Login
              </ListItem>
            </Link>

            <Link href="/signup" passhref="true" sx={footerStyle.listText}>
              <ListItem button component="a" disableGutters>
                Sign-Up
              </ListItem>
            </Link>
          </List>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Footer;

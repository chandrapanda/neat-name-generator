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
    //   },
    //   listText: {
    //     color: "#ffffff",
    //     fontSize: "1em",
    //     fontFamily: "Helvetica, sans-serif",
    //     lineHeight: "1em",
    //     fontWeight: 100,
  },
};

const Footer = () => {
  return (
    <Container sx={footerStyle.container} maxWidth={false}>
      <Grid container spacing={9} sx={{ padding: 5, mt: 0.2 }}>
        <Grid item xs={12} sm={12} md={6} lg={6}>
          <Box>
            <Typography variant="h2" color="primary.contrastText">
              Neat Name Generator
            </Typography>
            <Typography variant="p" color="primary.contrastText">
              Use this app to call on students at random in your class! This
              way, all your students participate equally.
            </Typography>
          </Box>
        </Grid>

        <Grid item xs={12} sm={12} md={6} lg={6}>
          <Typography variant="h2" color="primary.contrastText">
            Meet the Developer
          </Typography>
          <Link
            href="https://github.com/chandrapanda"
            rel="noopener noreferrer"
            target="_blank"
          >
            Chandra Holt
          </Link>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Footer;

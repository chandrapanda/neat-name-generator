import React from "react";
import {
  Button,
  Box,
  Container,
  Grid,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";

//Styling
const listStyle = {
  backgroundColor: "#ffffff",
  color: "black",
  width: "400px",
  justifyContent: "center",
  textAlign: "center",
  mt: 4,
  mb: 2,
  flexDirection: "inherit",
};

//show a list of students that have already been selected in the past
const PreviouslySelected = (props) => {
  const { studentData, resetAllToUnselected } = props;
  return (
    <Container sx={{ width: "auto" }}>
      <Button
        id="reset-button"
        size="large"
        variant="contained"
        type="submit"
        onClick={() => resetAllToUnselected()}
      >
        Reset all students
      </Button>
      <Grid container sx={listStyle}>
        <Grid item xs={12} md={6}>
          <Typography alignSelf="center" variant="h2" component="div">
            Selected Students Key
          </Typography>
          <List>
            {studentData.map((student, index) => {
              return (
                <ListItem key={index}>
                  <ListItemText
                    primary={student.name}
                    secondary={student.selected ? "Selected" : null}
                  />
                </ListItem>
              );
            })}
          </List>
        </Grid>
      </Grid>
    </Container>
  );
};

export default PreviouslySelected;

import React from "react";
import {
  Button,
  Box,
  Container,
  List,
  ListItem,
  ListItemText,
  Grid,
  Typography,
} from "@mui/material";

//Styling
const fieldStyle = {
  backgroundColor: "white",
  color: "black",
  width: "500px",
  alignSelf: "center",
  mt: 4,
  mb: 2,
};

//show a list of students that have already been selected in the past
const PreviouslySelected = (props) => {
  const { studentData, resetAllToUnselected } = props;
  return (
    <Container sx={fieldStyle}>
      <Button
        id="reset-button"
        size="large"
        variant="contained"
        type="submit"
        sx={{ width: "fit-content", alignSelf: "center" }}
        onClick={() => resetAllToUnselected()}
      >
        Reset all students
      </Button>
      <Box sx={{ flexGrow: 1, maxWidth: 752 }}>
        <Grid container spacing={2}></Grid>
        <Grid item xs={12} md={6}>
          <Typography sx={{ mt: 4, mb: 2 }} variant="h6" component="div">
            Selected Students KEY:
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
      </Box>
    </Container>
  );
};

export default PreviouslySelected;

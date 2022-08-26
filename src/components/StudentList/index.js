import * as React from "react";
import {
  Box,
  Grid,
  Typography,
  List,
  ListItem,
  TextField,
  FormControl,
  Button,
} from "@mui/material";

const fieldStyle = {
  background: "white",
};

let studentNames = [
  "Mary Smith",
  "Joaquim Tochtermann",
  "Ahmed Mohammed",
  "Jules Reynolds",
  "Tuan Hong",
  "Bob Ray",
  "Liam Neeson",
  "Jose Gallo",
  "Nicole Herman",
];

// TODO: Create function to map over student names after seeds are ready
function handleGenerate() {
  console.log("The button is working!");
  studentNames.push();
}

console.log(studentNames);

const StudentList = () => {
  return (
    <Box>
      <FormControl>
        <TextField
          id="student-name-form"
          variant="outlined"
          label="Write a name"
          color="primary"
          sx={fieldStyle}
        ></TextField>
        <p>Enter a student's name and click "GENERATE"</p>
        <Button
          id="generate-button"
          variant="contained"
          onClick={(() => alert("clicked"), handleGenerate)}
        >
          Generate
        </Button>
      </FormControl>

      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <Typography sx={{ mt: 4, mb: 2 }} variant="h6" component="div">
            <List id="student-name-list">
              {studentNames.map((student) => {
                return <ListItem>{student} </ListItem>;
              })}
            </List>
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};
export default StudentList;

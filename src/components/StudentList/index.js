import * as React from "react";
import { Box, Grid, Typography, List, ListItem } from "@mui/material";

// TODO: Create function to map over student names after seeds are ready
// function displayStudentList() {
//   return [0, 1, 2].map((value) =>
//     React.cloneElement(studentName, {
//       key: value,
//     })
//   );
// }

let studentNames = ["Mary", "Joaquim", "Ahmed", "Jules", "Tuan"];

const StudentList = () => {
  return (
    <Box>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <Typography
            sx={{ mt: 4, mb: 2 }}
            variant="h6"
            component="div"
          ></Typography>
          <List>
            {studentNames.map((student) => {
              return <ListItem>{student} </ListItem>;
            })}
          </List>
        </Grid>
      </Grid>
    </Box>
  );
};
export default StudentList;

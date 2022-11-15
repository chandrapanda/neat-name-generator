import React from "react";
import {
  Button,
  Table,
  TableBody,
  TableContainer,
  TableHead,
  TableRow,
  TableCell,
  Paper,
} from "@mui/material";

//Styling
const fieldStyle = {
  backgroundColor: "white",
  width: "500px",
  alignSelf: "center",
  mt: 4,
  mb: 2,
};

//show a list of students that have already been selected in the past
const Tableheader = () => {
  return (
    <TableHead>
      <TableBody>
        <TableRow>
          <TableCell>Selected Students</TableCell>
          <TableCell>Unselected Students</TableCell>
        </TableRow>
      </TableBody>
    </TableHead>
  );
};

const Tablebody = (props) => {
  const rows = props.studentData.map((student, index) => {
    return (
      <TableRow key={index}>
        <TableCell>{student.name}</TableCell>
        <TableCell>
          <Button onClick={() => props.resetAllToUnselected()}>RESET ALL</Button>
        </TableCell>
      </TableRow>
    );
  });
  return <TableBody>{rows}</TableBody>;
};
const PreviouslySelected = (props) => {
  const { studentData, selectStudent } = props;
  return (
    <TableContainer sx={fieldStyle} component={Paper}>
      <Table>
        <Tableheader />
        <Tablebody studentData={studentData} selectStudent={selectStudent} />
      </Table>
    </TableContainer>
  );
};

export default PreviouslySelected;

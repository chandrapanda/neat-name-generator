import React from "react";
import {
  Button,
  Grid,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";

//Styling
const tableStyle = {
  backgroundColor: "white",
  width: "500px",
  alignSelf: "center",
  mt: 4,
  mb: 2,
};

//Create display table for students
const Tableheader = () => {
  return (
    <TableHead>
      <TableBody>
        <TableRow>
          <TableCell sx={{ fontSize: 34, fontStyle: "underline" }}>
            Student Names
          </TableCell>
        </TableRow>
      </TableBody>
    </TableHead>
  );
};

const Tablebody = (props) => {
  const rows = props.studentData.map((student, index) => {
    return (
      <TableRow key={index}>
        <TableCell sx={{ fontSize: 18 }}>{student.name}</TableCell>
        <TableCell>
          <Button onClick={() => props.removeStudent(index)}>Delete</Button>
        </TableCell>
      </TableRow>
    );
  });
  return <TableBody>{rows}</TableBody>;
};

const StudentTable = (props) => {
  const { studentData, removeStudent } = props;
  return (
    <TableContainer sx={tableStyle}>
      <Table>
        <Tableheader />

        <Tablebody studentData={studentData} removeStudent={removeStudent} />
      </Table>
    </TableContainer>
  );
};

export default StudentTable;

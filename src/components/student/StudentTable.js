import React from "react";
import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
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

const Tableheader = () => {
  return (
    <TableHead>
      <TableBody>
        <TableRow>Student Name</TableRow>
      </TableBody>
    </TableHead>
  );
};

const Tablebody = (props) => {
  const rows = props.studentData.map((row, index) => {
    return (
      <TableRow key={index}>
        <TableCell>{row.name}</TableCell>
        <TableCell>
          <Button onClick={() => props.removeStudent(index)}>Delete</Button>
        </TableCell>
      </TableRow>
    );
  });
  return <tbody>{rows}</tbody>;
};

const StudentTable = (props) => {
  const { studentData, removeStudent } = props;
  return (
    <TableContainer sx={fieldStyle} component={Paper}>
      <Table>
        <Tableheader />
        <Tablebody studentData={studentData} removeStudent={removeStudent} />
      </Table>
    </TableContainer>
  );
};

export default StudentTable;

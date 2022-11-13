import React, { Component } from "react";
import {
  Box,
  Grid,
  Typography,
  List,
  ListItem,
  TextField,
  FormControl,
  Button,
  Modal,
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
    <thead>
      <tr>
        <th>Student Name</th>
      </tr>
    </thead>
  );
};

const Tablebody = (props) => {
  const rows = props.studentData.map((row, index) => {
    return (
      <tr key={index}>
        <td>{row.name}</td>
        <td>
          <button onClick={() => props.removeStudent(index)}>Delete</button>
        </td>
      </tr>
    );
  });
  return <tbody>{rows}</tbody>;
};

const Table = (props) => {
  const { studentData, removeStudent } = props;
  return (
    <table>
      <Tableheader />
      <Tablebody studentData={studentData} removeStudent={removeStudent} />
    </table>
  );
};

export default Table;

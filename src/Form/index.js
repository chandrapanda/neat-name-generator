import React, { Component } from "react";
// import { useState } from "react";
import { Button, FormControl, TextField } from "@mui/material";

//Styling
const fieldStyle = {
  backgroundColor: "white",
  width: "500px",
  alignSelf: "center",
  mt: 4,
  mb: 2,
};

class Form extends Component {
  initialState = {
    name: "",
  };
  state = this.initialState;
  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };
  submitForm = () => {
    this.props.handleSubmit(this.state);
    this.setState(this.initialState);
    console.log("The add name button is working!");
  };
  render() {
    const { studentName } = this.state;

    return (
      <FormControl>
        <p>Enter a student's name and click "ADD NAME TO LIST".</p>
        <TextField
          id="student-name-form"
          name="name"
          variant="outlined"
          label="Write a name"
          color="primary"
          value={studentName}
          onChange={this.handleChange}
          sx={fieldStyle}
        ></TextField>
        <Button
          id="add-name-button"
          size="large"
          variant="contained"
          type="submit"
          sx={{ mt: 4, mb: 2, width: "fit-content", alignSelf: "center" }}
          onClick={this.submitForm}
        >
          Add name to list
        </Button>
      </FormControl>
    );
  }
}

export default Form;

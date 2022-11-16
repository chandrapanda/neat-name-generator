import "./App.css";
import React, { Component } from "react";
//TODO: refactor to import { useState } from "react";
//TODO: add webpack to minify application
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import RandomStudent from "./components/student/RandomStudent";
import Form from "./components/student/NewStudentForm";
import StudentTable from "./components/student/StudentTable";
import PreviouslySelected from "./components/student/PreviouslySelected";
import myLogo from "./images/mylogo.png";

const theme = createTheme({
  typography: {
    fontFamily: '"Comfortaa", Arial, sans-serif',
    h1: {
      fontSize: "3.5rem",
      fontWeight: "bolder",
    },
    h2: {
      fontSize: "1.5em",
    },
    h3: {
      fontSize: "1em",
    },
    h6: {
      fontSize: "1em",
      textAlign: "center",
    },
    p: {
      fontSize: "1em",
      textAlign: "center",
    },
  },
});

//TODO: set up local storage for array of studentName objects
// const useLocalStorage = () => {
//   const [studentData, setStudentData] = React.useState(localStorage.getItem('students') === 'true' => {
//     try {
//       const students = window.localStorage.getItem(studentData);
//       if (value) {
//         return JSON.parse(value);
//       } else {
//         window.localStorage.setItem(studentData, JSON.stringify(""));
//         return "";
//       }
//     } catch (err) {
//       console.log(err);
//     }
//   });
// };

class App extends Component {
  state = {
    students: [
      {
        id: "r851d99f-988d-e6a6-1a72-d51fed5922d4",
        name: "Mary",
        selected: false,
      },
      {
        id: "s851d99f-988d-e6b6-1a72-d51fed5922d4",
        name: "Cian",
        selected: true,
      },
      {
        id: "e851d98f-988d-e6b6-1a72-d51fed5922d4",
        name: "Li",
        selected: false,
      },
      {
        id: "a851d99f-988d-e6b6-1a72-d51fed5922d4",
        name: "Mohammed",
        selected: false,
      },
      {
        id: "b851d99f-988d-e6b6-1a72-d51fed5922d4",
        name: "Jose",
        selected: false,
      },
      {
        id: "c851d99f-988d-e6b6-1a72-d51fed5922d4",
        name: "Cara",
        selected: true,
      },
      {
        id: "o851d99f-988d-e6b6-1a72-d51fed5922d4",
        name: "Blorp",
        selected: true,
      },
    ],
  };

  //select student for random generator
  selectStudent = (student) => {
    const { students } = this.state;
    const selectedStudentId = student.id;
    this.setState({
      student: students.map((currentStudent) => {
        if (currentStudent.id === selectedStudentId) {
          currentStudent.selected = true;
        }
        return currentStudent;
      }),
    });
    const unselectedStudents = students.filter(
      (currentStudent) => !currentStudent.selected
    );
    if (!unselectedStudents) {
      students.map((currentStudent) => {
        currentStudent.selected = false;
        return currentStudent;
      });
    }
  };

  //reset all students to unselected
  resetAllToUnselected = () => {
    const { students } = this.state;
    const deSelectedStudents = students.map((currentStudent) => {
      currentStudent.selected = false;
      return currentStudent;
    });
    this.setState({ students: deSelectedStudents });
    console.log(students);
  };

  //remove a student from array
  removeStudent = (index) => {
    const { students } = this.state;
    this.setState({
      students: students.filter((student, i) => {
        return i !== index;
      }),
    });
  };

  //set new student data and push to array
  handleSubmit = (student) => {
    this.setState({ students: [...this.state.students, student] });
  };

  //render app
  render() {
    const { students } = this.state;
    return (
      <ThemeProvider theme={theme}>
        <div className="App">
          <Navbar />
          <header className="App-header">
            <img
              src={myLogo}
              className="App-logo"
              alt="logo"
              height="20px"
              padding="10px"
            />
            <Form handleSubmit={this.handleSubmit} />
            <StudentTable
              studentData={students}
              removeStudent={this.removeStudent}
            />

            <RandomStudent
              selectStudent={this.selectStudent}
              studentData={students}
            />
            <PreviouslySelected
              studentData={students}
              resetAllToUnselected={this.resetAllToUnselected}
            />
          </header>
          <Footer />
        </div>
      </ThemeProvider>
    );
  }
}

export default App;

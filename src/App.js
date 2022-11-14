import "./App.css";
import React, { Component } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import RandomStudent from "./components/RandomStudent";
import Form from "./Form";
import StudentTable from "./components/StudentTable";

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
// const useLocalStorage = (studentList, students) => {
//   const [storedNames, setStoredNames] = React.useState(() => {
//     try {
//       const students = window.localStorage.getItem(studentList);
//       if (value) {
//         return JSON.parse(value);
//       } else {
//         window.localStorage.setItem(studentList, JSON.stringify(""));
//         return "";
//       }
//     } catch (err) {
//       console.log(err);
//     }
//   });
// };

class App extends Component {
  state = {
    students: [],
  };
  removeStudent = (index) => {
    const { students } = this.state;
    this.setState({
      students: students.filter((student, i) => {
        return i !== index;
      }),
    });
  };
  handleSubmit = (student) => {
    this.setState({ students: [...this.state.students, student] });
  };
  render() {
    const { students } = this.state;
    return (
      <ThemeProvider theme={theme}>
        <div className="App">
          <Navbar />
          <header className="App-header">
            <img
              src="/images/mylogo.png"
              className="App-logo"
              alt="logo"
              height="20px"
              padding="10px"
            />

            <div class="table-container">
              <StudentTable
                studentData={students}
                removeStudent={this.removeStudent}
              />
              <Form handleSubmit={this.handleSubmit} />
            </div>
            <RandomStudent />
          </header>
          <Footer />
        </div>
      </ThemeProvider>
    );
  }
}

export default App;

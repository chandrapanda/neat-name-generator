import "./App.css";
import { TextField, FormControl, Button } from "@mui/material";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import StudentList from "./components/StudentList";

const fieldStyle = {
  background: "white",
};

function App() {
  return (
    <div className="App">
      <Navbar />
      <header className="App-header">
        <img src="/images/mylogo.png" className="App-logo" alt="logo" />
        <FormControl>
          <TextField
            id="student-name-form"
            variant="outlined"
            label="Write a name"
            color="primary"
            sx={fieldStyle}
          ></TextField>
          <p>Enter a student's name and click "GENERATE"</p>
          <Button variant="contained"> Generate </Button>
        </FormControl>
        <StudentList />
      </header>
      <Footer />
    </div>
  );
}

export default App;

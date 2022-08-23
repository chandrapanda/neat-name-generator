import "./App.css";
import { TextField, FormControl } from "@mui/material";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

const fieldStyle = {
  color: "white",
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
            color="secondary"
            sx={fieldStyle}
          ></TextField>
          <p>Enter student names and click "GENERATE"</p>
        </FormControl>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Generate
        </a>
      </header>
      <Footer />
    </div>
  );
}

export default App;

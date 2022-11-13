import "./App.css";

import { ThemeProvider, createTheme } from "@mui/material/styles";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import StudentList from "./components/StudentList";
import Table from "./components/Table";

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

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Navbar />
        <header className="App-header">
          {/* <img
            src="/images/mylogo.png"
            className="App-logo"
            alt="logo"
            height="20px"
            padding="10px"
          /> */}
          <div class="table-container">
            <Table />
          </div>
          <StudentList />
        </header>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;

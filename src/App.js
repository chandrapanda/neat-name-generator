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
  // palette: {
  //   primary: {
  //     light: "#ECF6FC", // background light blue
  //     main: "#105F9A", // theme blue
  //     dark: "#168BE2", // bright blue
  //     contrastText: "#FFFFFF",
  //   },
  //   secondary: {
  //     light: "#597992", // disabled blue
  //     main: "#062740", // dark blue
  //     accent: "#F5E410", // yellow
  //     contrastText: "#062740", // dark blue, text color
  //   },
  // },
});

function App() {
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
          <StudentList />
          <div className="container">
            <Table />
          </div>
        </header>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;

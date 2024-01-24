import "./App.css";
import ButtonAppBar from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import { createTheme } from "@mui/material";
import { ThemeProvider } from "@emotion/react";

function App() {
  const theme = createTheme({
    typography: {
      regularwords: {
        color: "#9DA2AB",
        fontFamily: ["Quicksand"].join(","),
      },
      headerwords: {
        color: "#9DA2AB",
        transition: "color 0.3s ease",
        "&:hover": {
          color: "#78FFD6", // Altere para a cor desejada no hover
        },
        fontFamily: ["Quicksand"].join(","),
      }, 
      highlighted: {
        color: "#78FFD6",
        fontFamily: ["Quicksand"].join(","),
      },
    }, 
     breakpoints: {
      values: {
        xxs:320,
        xs: 375,
        sm: 600,
        md: 900,
        lg: 1200,
        xl: 1536,
      },
    },
    palette: {
      primary: {
        main: "#0a192f",
      },
      secondary: {
        main: "#9DA2AB",
      },
      contrastText: {
        main: "#78FFD6",
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <ButtonAppBar></ButtonAppBar>
      <div className="App">
       
        <div id="Content">
           <Home></Home>
           <About></About>
        </div>
       
      </div>
    </ThemeProvider>
  );
}

export default App;

import "./App.css";
import ButtonAppBar from "./components/Header";
import Home from "./components/Home";
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
      <div className="App">
        <ButtonAppBar></ButtonAppBar>
        <div id="Content">
           <Home></Home>
        </div>
       
      </div>
    </ThemeProvider>
  );
}

export default App;

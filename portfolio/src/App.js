import "./App.css";
import ButtonAppBar from "./components/Header";
import { createTheme } from "@mui/material";
import { ThemeProvider } from "@emotion/react";

function App() {
  const theme = createTheme({
    typography: {
      regularwords: {
        color: "#9DA2AB",
        fontFamily: ["NTR"].join(","),
      },
      headerwords: {
        color: "#9DA2AB",
        transition: "color 0.3s ease",
        "&:hover": {
          color: "#78FFD6", // Altere para a cor desejada no hover
        },
        fontFamily: ["NTR"].join(","),
      },
    },
    palette: {
      primary: {
        main: "#2D3250",
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
      </div>
    </ThemeProvider>
  );
}

export default App;

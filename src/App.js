import { ThemeProvider, createMuiTheme, CssBaseline } from "@material-ui/core";
import React from "react";
import "./App.css";

import Routes from "./components/Routes/Routes";

const theme = createMuiTheme({
  typography: {
    fontFamily: ["'Montserrat', sans-serif"].join(","),
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className="App">
        <Routes />
      </div>
    </ThemeProvider>
  );
}

export default App;

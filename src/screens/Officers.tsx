import * as React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { Container } from "@mui/material";
import Header from "./Header";
import { sections } from "./Sections";

const theme = createTheme({
  typography: {
    fontFamily: "Questrial",
  },
  palette: {
    background: {
      default: "#082c6c",
    },
  },
});

export default function Officers() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="lg">
        <Header title="CSULB AESB" sections={sections} />
        <main>
          <h1>Officers</h1>
        </main>
      </Container>
    </ThemeProvider>
  );
}

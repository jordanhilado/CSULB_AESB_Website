import * as React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { Container } from "@mui/material";
import Header from "./Header";
import { sections } from "./Sections";
import Footer from "./Footer";
import { theme } from "./theme";
import { footerInfo } from "../assets/footerInfo";

export default function Merchandise() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="lg">
        <Header title="CSULB AESB" sections={sections} />
        <main>
          <h1>Merchandise</h1>
          <p>
            We will be releasing new AESB merchandise this Spring 2022! Keep an
            eye out!
          </p>
        </main>
      </Container>
      <Footer description={footerInfo} />
    </ThemeProvider>
  );
}

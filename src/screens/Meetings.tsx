import * as React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { Container } from "@mui/material";
import Header from "./Header";
import { sections } from "./Sections";
import Footer from "./Footer";
import { theme } from "./theme";
import { footerInfo } from "../assets/footerInfo";

export default function Meetings() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="lg">
        <Header title="CSULB AESB" sections={sections} />
        <main style={{ color: "#E4E6EB" }}>
          <h1>Meetings and Events</h1>
          <p>
            Welcome to Spring 2022! Meetings and events will be announced soon!
          </p>
        </main>
      </Container>
      <Footer description={footerInfo} />
    </ThemeProvider>
  );
}

import * as React from "react";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { Container } from "@mui/material";
import Header from "./Header";
import { sections } from "./Sections";
import Footer from "./Footer";
import { theme } from "./theme";
import { footerInfo } from "../assets/footerInfo";

export default function Join() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="lg">
        <Header title="CSULB AESB" sections={sections} />
        <main style={{ color: "#E4E6EB" }}>
          <h1>Join AESB</h1>
          <p>
            Join an AESB committee to become more involved with the CSULB
            engineering department and your fellow peers. Develop and enhance
            networking skills while creating lasting friendships from home.
            Apply now!
          </p>
        </main>
      </Container>
      <Footer description={footerInfo} />
    </ThemeProvider>
  );
}

import * as React from "react";
import { ThemeProvider } from "@mui/material/styles";
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
          <h2 style={{ textAlign: "center" }}>
            Tentative Spring 2022 AESB Meetings
          </h2>
          <tbody>
            <tr id="row0">
              <td id="cell0-0">test</td>
              <td id="cell0-1">sdf</td>
              <td id="cell0-2">asdf</td>
            </tr>
          </tbody>
        </main>
      </Container>
      <Footer description={footerInfo} />
    </ThemeProvider>
  );
}

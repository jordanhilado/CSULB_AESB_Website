import * as React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { Container } from "@mui/material";
import Header from "./Header";
import { sections } from "./Sections";
import Footer from "./Footer";
import Button from "@mui/material/Button";
import { theme } from "./theme";
import { footerInfo } from "../assets/footerInfo";
import { Divider } from "@material-ui/core";

export default function About() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="lg" style={{ color: "#E4E6EB" }}>
        <Header title="CSULB AESB" sections={sections} />
        <main>
          <h1>About us</h1>
          <p>
            Associated Engineering Student Body (AESB) is the College Council of
            the College of Engineering here at California State University, Long
            Beach. AESB is the largest Associated Student Body at CSULB which is
            currently associated with more than 20 organizations. AESB advises
            the COE Dean of its recommendations on matters concerning the
            general welfare of the COE students. AESB is also a liaison between
            the COE administration, faculty, recognized student organizations,
            and members of the COE student body.
          </p>
          <h3>
            "To promote and maintain the establishment of student organizations
            within the COE. To serve as a representative voice of the students
            of the COE on all matters concerning them. To provide a forum for
            the discussion and resolution of problems common to the students of
            the COE. To stimulate interaction and interest between faculty and
            students of all academic areas in the COE."
          </h3>
          <p>– Associated Engineering Student Body</p>
          <Button
            href="https://docs.google.com/document/d/1_QzCOAQQmeHsur68QVHVzEYMDBH2UiURCNOqPg8ruSs/edit?ts=5d73e77a"
            variant="outlined"
            target="_blank"
            rel="noopener noreferrer"
          >
            AESB Constitution and Bylaws
          </Button>
        </main>
      </Container>
      <Footer description={footerInfo} />
    </ThemeProvider>
  );
}

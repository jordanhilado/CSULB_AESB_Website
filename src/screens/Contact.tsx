import * as React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { Container, Link } from "@mui/material";
import Header from "./Header";
import { sections } from "./Sections";
import Footer from "./Footer";
import { theme } from "./theme";
import { footerInfo } from "../assets/footerInfo";
import { contactInfo } from "../assets/contactInfo";
import "./Contact.css";

const CONTAINER = {
  // backgroundColor: "green",
  display: "flex",
  flexDirection: "column",
  flexWrap: "wrap",
  alignItems: "center",
  rowGap: 40,
};

// const BUTTON_CONTAINER = {
//   backgroundColor: "#3576cb",
//   color: "white",
//   width: 400,
//   height: 80,
//   borderRadius: 35,
//   display: "flex",
//   border: "2px solid purple",
// };

const CHILD_1 = {
  fontWeight: "bold",
  fontSize: 30,
  width: "fit-content",
  lineHeight: 0.8,
  marginLeft: 50,

  // border: "2px solid green",
};

const CHILD_2 = {
  fontSize: 20,
  width: "fit-content",
  lineHeight: 0.8,
  marginLeft: 50,

  // border: "2px solid red",
};

const CHILD_3 = {
  transform: "scale(2.5)",
  width: "fit-content",
  height: 24,
  marginRight: 65,

  // border: "2px solid green",
};

const LEFT_HALF = {
  width: "50%",
  display: "flex",
  flexDirection: "column",
  borderRadius: 35,
  justifyContent: "center",

  // border: "2px solid pink",
};

const RIGHT_HALF = {
  width: "50%",
  display: "flex",
  justifyContent: "flex-end",
  alignItems: "center",
  borderRadius: 35,

  // border: "2px solid pink",
};

export default function Contact() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="lg">
        <Header title="CSULB AESB" sections={sections} />
        <main style={{ color: "#E4E6EB" }}>
          <h1>Contact</h1>
          <div style={CONTAINER as React.CSSProperties}>
            {contactInfo.map((contact) => {
              return (
                <>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href={contact.link}
                    className="noDecoration"
                  >
                    <div
                      className="BUTTON"
                      // style={BUTTON_CONTAINER as React.CSSProperties}
                    >
                      <div style={LEFT_HALF as React.CSSProperties}>
                        <div style={CHILD_1 as React.CSSProperties}>
                          {contact.title}
                        </div>
                        <div style={CHILD_2 as React.CSSProperties}>
                          {contact.username}
                        </div>
                      </div>
                      <div style={RIGHT_HALF as React.CSSProperties}>
                        <div style={CHILD_3 as React.CSSProperties}>
                          <contact.icon />
                        </div>
                      </div>
                    </div>
                  </a>
                </>
              );
            })}
          </div>
        </main>
      </Container>
      <Footer description={footerInfo} />
    </ThemeProvider>
  );
}

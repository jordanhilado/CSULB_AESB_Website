import * as React from "react";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { Container } from "@mui/material";
import Header from "./Header";
import { sections } from "./Sections";
import Footer from "./Footer";
import { theme } from "./theme";
import { footerInfo } from "../assets/footerInfo";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { color } from "../assets/color";

function createMeeting(date: string, time: string, attendees: string) {
  return { date, time, attendees };
}

const meetings = [
  createMeeting("Wednesday (02/02)", "2:30 – 3pm", "AESB Officers Only"),
  createMeeting("Saturday (02/19)", "12:30 – 1pm", "AESB + COE Officers"),
  createMeeting("Wednesday (03/02)", "2:30 – 3pm", "AESB Officers Only"),
  createMeeting("Saturday (03/19)", "12:30 – 1pm", "AESB + COE Officers"),
  createMeeting("Wednesday (03/30)", "2:30 – 3pm", "AESB Officers Only"),
  createMeeting("Saturday (04/16)", "12:30 – 1pm", "AESB + COE Officers"),
  createMeeting("Wednesday (04/27)", "2:30 – 3pm", "AESB Officers Only"),
  createMeeting("Saturday (05/14)", "12:30 – 1pm", "AESB + COE Officers"),
  createMeeting("Wednesday (05/25)", "2:30 – 3pm", "AESB Officers Only"),
  createMeeting("Saturday (06/11)", "12:30 – 1pm", "AESB + COE Officers"),
];

function createOH(date: string, time: string, attendees: string) {
  return { date, time, attendees };
}

const officeHours = [createOH("Tuesdays", "4:30 – 5pm", "Antonio (President)")];

const TABLE = {
  width: 650,
  borderRadius: 20,
  backgroundColor: color.darker,
};

const CELL = {
  color: "white",
  borderBottom: "1px solid " + color.dark,
};

const CELL_HEADER = {
  borderBottom: "1px solid " + color.dark,
  fontWeight: "bold",
  fontSize: 18,
  color: "white",
};

export default function Meetings() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="lg">
        <Header title="CSULB AESB" sections={sections} />
        <main style={{ color: "#E4E6EB" }}>
          <h1>Meetings and Events</h1>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <h2>Tentative Spring 2022 AESB Meetings</h2>
            <p style={{ marginTop: -8 }}>Contact us for zoom links!</p>
            <TableContainer
              style={TABLE as React.CSSProperties}
              component={Paper}
            >
              <Table aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell
                      align="center"
                      style={CELL_HEADER as React.CSSProperties}
                    >
                      Day
                    </TableCell>
                    <TableCell
                      align="center"
                      style={CELL_HEADER as React.CSSProperties}
                    >
                      Time
                    </TableCell>
                    <TableCell
                      align="center"
                      style={CELL_HEADER as React.CSSProperties}
                    >
                      Attendees
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {meetings.map((meeting) => (
                    <TableRow>
                      <TableCell
                        style={CELL as React.CSSProperties}
                        align="center"
                      >
                        {meeting.date}
                      </TableCell>
                      <TableCell
                        style={CELL as React.CSSProperties}
                        align="center"
                      >
                        {meeting.time}
                      </TableCell>
                      <TableCell
                        style={CELL as React.CSSProperties}
                        align="center"
                      >
                        {meeting.attendees}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
            <h2>AESB Office Hours</h2>
            <p style={{ marginTop: -8 }}>Contact us for zoom links!</p>
            <TableContainer
              style={TABLE as React.CSSProperties}
              component={Paper}
            >
              <Table aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell
                      align="center"
                      style={CELL_HEADER as React.CSSProperties}
                    >
                      Day
                    </TableCell>
                    <TableCell
                      align="center"
                      style={CELL_HEADER as React.CSSProperties}
                    >
                      Time
                    </TableCell>
                    <TableCell
                      align="center"
                      style={CELL_HEADER as React.CSSProperties}
                    >
                      Officer
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {officeHours.map((OH) => (
                    <TableRow>
                      <TableCell
                        style={CELL as React.CSSProperties}
                        align="center"
                      >
                        {OH.date}
                      </TableCell>
                      <TableCell
                        style={CELL as React.CSSProperties}
                        align="center"
                      >
                        {OH.time}
                      </TableCell>
                      <TableCell
                        style={CELL as React.CSSProperties}
                        align="center"
                      >
                        {OH.attendees}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </div>
        </main>
      </Container>
      <Footer description={footerInfo} />
    </ThemeProvider>
  );
}

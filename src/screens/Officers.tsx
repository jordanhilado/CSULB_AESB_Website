import * as React from "react";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { Container } from "@mui/material";
import Header from "./Header";
import { sections } from "./Sections";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { officerInfo } from "../assets/officerInfo";
import Footer from "./Footer";
import { theme } from "./theme";
import { footerInfo } from "../assets/footerInfo";

const CONTAINER = {
  // backgroundColor: "green",
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
  justifyContent: "space-evenly",
  rowGap: 40,
};

export default function Officers() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="lg">
        <Header title="CSULB AESB" sections={sections} />
        <main style={{ color: "#E4E6EB" }}>
          <h1>Officers</h1>
          <p>
            Our Council is composed of two boards – Executive Board and
            Leadership Board with Industry Committee. The council is
            representative of engineering student body in the council members
            from all different types of Engineering departments and class years.
          </p>
          <div style={CONTAINER as React.CSSProperties}>
            {officerInfo.map((officer) => {
              return (
                <>
                  <Card
                    sx={{
                      maxHeight: "fit-content",
                      maxWidth: 345,
                      borderRadius: 3,
                      backgroundColor: "#242526",
                      color: "#E4E6EB",
                    }}
                  >
                    <CardMedia
                      component="img"
                      height="200"
                      image={officer.image}
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        {officer.name}, {officer.role}
                        <Typography
                          gutterBottom
                          variant="body2"
                          color="#E4E6EB"
                          component="div"
                        >
                          {officer.major}
                        </Typography>
                      </Typography>
                      <Typography variant="body1" color="#E4E6EB">
                        {officer.description}
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Button href={officer.email} size="small">
                        Email
                      </Button>
                      <Button
                        target="_blank"
                        rel="noopener noreferrer"
                        href={officer.linkedin}
                        size="small"
                      >
                        LinkedIn
                      </Button>
                    </CardActions>
                  </Card>
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

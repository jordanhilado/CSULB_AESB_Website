import * as React from "react";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { Container } from "@mui/material";
import Header from "./Header";
import { sections } from "./Sections";
import Footer from "./Footer";
import { theme } from "./theme";
import { footerInfo } from "../assets/footerInfo";
import { clubInfo } from "../assets/clubInfo";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
// import { CardActionArea } from "@mui/material";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";

const CONTAINER = {
  // backgroundColor: "green",
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
  justifyContent: "space-evenly",
  rowGap: 80,
};

export default function ClubsAndOrganizations() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="lg">
        <Header title="CSULB AESB" sections={sections} />
        <main>
          <h1 style={{ color: "#E4E6EB" }}>Clubs and Organizations</h1>
          <div style={CONTAINER as React.CSSProperties}>
            {clubInfo.map((club) => {
              return (
                <>
                  <Card
                    sx={{
                      height: "fit-content",
                      maxWidth: 350,
                      borderRadius: 3,
                      backgroundColor: "#242526",
                      color: "#E4E6EB",
                    }}
                  >
                    <CardMedia
                      component="img"
                      height="200"
                      image={club.image}
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        {club.name}
                      </Typography>
                      <Typography variant="body1" color="#E4E6EB">
                        {club.description}
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Button
                        target="_blank"
                        rel="noopener noreferrer"
                        href={club.link}
                        size="small"
                        variant="contained"
                      >
                        Website
                      </Button>
                      <Button
                        target="_blank"
                        rel="noopener noreferrer"
                        href={club.beachsync}
                        size="small"
                        variant="outlined"
                      >
                        BeachSync
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

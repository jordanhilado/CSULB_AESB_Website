import * as React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
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
import { CardActionArea } from "@mui/material";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";

const CONTAINER = {
  // backgroundColor: "green",
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
  justifyContent: "space-evenly",
  rowGap: 40,
};

export default function ClubsAndOrganizations() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="lg">
        <Header title="CSULB AESB" sections={sections} />
        <main>
          <h1>Clubs and Organizations</h1>
          <div style={CONTAINER as React.CSSProperties}>
            {clubInfo.map((club) => {
              return (
                <>
                  <Card sx={{ maxWidth: 350, borderRadius: 3 }}>
                    <CardMedia
                      component="img"
                      height="200"
                      image="https://source.unsplash.com/random"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        {club.name}
                      </Typography>
                      <Typography variant="body1" color="text.secondary">
                        {club.description}
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Button
                        target="_blank"
                        rel="noopener noreferrer"
                        href={club.link}
                        size="small"
                      >
                        Website
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

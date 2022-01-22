import * as React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { Container } from "@mui/material";
import Header from "./Header";
import { sections } from "./Sections";
import Footer from "./Footer";
import { theme } from "./theme";
import { footerInfo } from "../assets/footerInfo";
import { galleryInfo } from "../assets/galleryInfo";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import Link from "@mui/material/Link";

const CONTAINER = {
  // backgroundColor: "green",
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
  justifyContent: "space-evenly",
  rowGap: 40,
};

export default function Gallery() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="lg">
        <Header title="CSULB AESB" sections={sections} />
        <main style={{ color: "#E4E6EB" }}>
          <h1>Gallery</h1>
          <div style={CONTAINER as React.CSSProperties}>
            {galleryInfo.map((gallery) => {
              return (
                <>
                  <Link
                    underline="none"
                    target="_blank"
                    rel="noopener noreferrer"
                    href={gallery.link}
                  >
                    <Card
                      sx={{
                        borderRadius: 3,
                        backgroundColor: "#242526",
                        color: "#E4E6EB",
                      }}
                    >
                      <CardActionArea>
                        <CardMedia
                          component="img"
                          height="140"
                          image={gallery.image}
                          alt="green iguana"
                        />
                        <CardContent>
                          <Typography gutterBottom variant="h5" component="div">
                            {gallery.title}
                          </Typography>
                          <Typography variant="body2">
                            {gallery.date}
                          </Typography>
                        </CardContent>
                      </CardActionArea>
                    </Card>
                  </Link>
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

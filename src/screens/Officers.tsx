import * as React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
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

const theme = createTheme({
  typography: {
    fontFamily: "Questrial",
  },
  palette: {
    background: {
      default: "#082c6c",
    },
  },
});

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
        <main>
          <h1>Officers</h1>
          <div style={CONTAINER as React.CSSProperties}>
            {officerInfo.map((officer) => {
              return (
                <>
                  <Card sx={{ maxWidth: 345 }}>
                    <CardMedia
                      component="img"
                      height="200"
                      image={officer.image}
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        {officer.role} {officer.name}
                        <Typography
                          gutterBottom
                          variant="body2"
                          component="div"
                        >
                          {officer.major}
                        </Typography>
                      </Typography>
                      <Typography variant="body1" color="text.secondary">
                        {officer.description}
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Button href={officer.email} size="small">
                        Email
                      </Button>
                      <Button href={officer.linkedin} size="small">
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
    </ThemeProvider>
  );
}

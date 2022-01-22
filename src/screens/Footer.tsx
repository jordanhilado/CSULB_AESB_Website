import * as React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";

function Copyright() {
  return (
    <Typography variant="body2" color="#E4E6EB" align="center">
      {"Copyright © "}
      <Link
        style={{ color: "#E4E6EB", textDecoration: "underline" }}
        href="https://www.csulb.edu/"
      >
        CSULB
      </Link>
      {" AESB "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

interface FooterProps {
  description: string;
  title?: string;
}

export default function Footer(props: FooterProps) {
  const { description, title } = props;

  return (
    <Box component="footer" sx={{ bgcolor: "#18191A", py: 6 }}>
      <Container maxWidth="lg">
        <Typography variant="h6" align="center" gutterBottom>
          {title}
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="#E4E6EB"
          component="p"
        >
          {description}
        </Typography>
        <Copyright />
      </Container>
    </Box>
  );
}

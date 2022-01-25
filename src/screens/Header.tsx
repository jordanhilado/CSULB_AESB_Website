import * as React from "react";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
// import Button from "@mui/material/Button";
// import IconButton from "@mui/material/IconButton";
// import SearchIcon from "@mui/icons-material/Search";
// import Typography from "@mui/material/Typography";
// import Link from "@mui/material/Link";
// import ButtonUnstyled from "@mui/base/ButtonUnstyled";

interface HeaderProps {
  sections: ReadonlyArray<{
    title: string;
    url: string;
  }>;
  title: string;
}

const NAVBAR = {
  width: "100%",
  display: "flex",
};

const NAVBAR_TITLE = {
  fontSize: 60,
  fontWeight: "bold",
  color: "#437F97",
  textShadow:
    "-1px -1px 0 #fff, 1px -1px 0 #fff, -1px 1px 0 #fff, 1px 1px 0 #fff",
};

export default function Header(props: HeaderProps) {
  const { sections, title } = props;

  return (
    <React.Fragment>
      <Toolbar sx={{ borderBottom: 1, borderColor: "#3A3B3C" }}>
        {/* <Button size="small">Subscribe</Button> */}
        {/* <Typography
          component="h2"
          variant="h2"
          color="white"
          align="center"
          noWrap
          sx={{ flex: 1 }}
        > */}
        <div style={NAVBAR as React.CSSProperties}>
          {/* <img src={require("../assets/aesb.png")} height={60} width={60} /> */}
          <a style={NAVBAR_TITLE as React.CSSProperties} href="/">
            {title}
          </a>
        </div>
        {/* </Typography> */}
        {/* <IconButton>
          <SearchIcon />
        </IconButton>
        <Button variant="outlined" size="small">
          Sign up
        </Button> */}
      </Toolbar>
      <Toolbar
        component="nav"
        variant="dense"
        sx={{
          justifyContent: "space-around",
          overflowX: "auto",
          borderBottom: 1,
          borderColor: "#3A3B3C",
          marginBottom: 3,
        }}
      >
        {sections.map((section) => (
          <Button
            href={section.url}
            variant="text"
            style={{ minWidth: "fit-content", margin: 10 }}
          >
            {section.title}
          </Button>
          // <Link
          //   color="inherit"
          //   noWrap
          //   key={section.title}
          //   variant="body2"
          //   href={section.url}
          //   sx={{ p: 1, flexShrink: 0 }}
          // >
          //   {section.title}
          // </Link>
        ))}
        <Button
          style={{ minWidth: "fit-content", margin: 10 }}
          href="/contact"
          variant="contained"
        >
          Contact
        </Button>
      </Toolbar>
    </React.Fragment>
  );
}

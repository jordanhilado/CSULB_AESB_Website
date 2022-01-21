import * as React from "react";
import Toolbar from "@mui/material/Toolbar";
// import Button from "@mui/material/Button";
// import IconButton from "@mui/material/IconButton";
// import SearchIcon from "@mui/icons-material/Search";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Button from "@mui/material/Button";
import ButtonUnstyled from "@mui/base/ButtonUnstyled";

interface HeaderProps {
  sections: ReadonlyArray<{
    title: string;
    url: string;
  }>;
  title: string;
}

export default function Header(props: HeaderProps) {
  const { sections, title } = props;

  return (
    <React.Fragment>
      <Toolbar sx={{ borderBottom: 1, borderColor: "divider" }}>
        {/* <Button size="small">Subscribe</Button> */}
        <Typography
          component="h2"
          variant="h2"
          color="white"
          align="center"
          noWrap
          sx={{ flex: 1 }}
        >
          <Button href="/" variant="text">
            {title}
          </Button>
        </Typography>
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
        sx={{ justifyContent: "space-between", overflowX: "auto" }}
      >
        {sections.map((section) => (
          <Button href={section.url} variant="text">
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
        <Button href="/contact" variant="contained">
          Contact
        </Button>
      </Toolbar>
    </React.Fragment>
  );
}

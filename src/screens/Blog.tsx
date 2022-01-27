import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import InstagramIcon from "@mui/icons-material/Instagram";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import { ThemeProvider } from "@mui/material/styles";
import Header from "./Header";
import MainFeaturedPost from "./MainFeaturedPost";
// import FeaturedPost from "./FeaturedPost";
import Main from "./Main";
import Sidebar from "./Sidebar";
import Footer from "./Footer";
// import post1 from "./blog-post.1.md";
// import post2 from "./blog-post.2.md";
// import post3 from "./blog-post.3.md";
import { sections } from "./Sections";
import { theme, light, dark } from "./theme";
import { footerInfo } from "../assets/footerInfo";
import Switch from "@mui/material/Switch";
import { styled } from "@mui/material/styles";

const mainFeaturedPost = {
  title: "Associated Engineering Student Body",
  description: "California State University, Long Beach",
  image:
    "https://www.csulb.edu/sites/default/files/groups/marketing-communications/zoombks/zoombackgrounds_16.jpg",
  imageText: "main image description",
  linkText: "Continue reading…",
};

// const featuredPosts = [
//   {
//     title: "Featured post",
//     date: "Nov 12",
//     description:
//       "This is a wider card with supporting text below as a natural lead-in to additional content.",
//     image: "https://source.unsplash.com/random",
//     imageLabel: "Image Text",
//   },
//   {
//     title: "Post title",
//     date: "Nov 11",
//     description:
//       "This is a wider card with supporting text below as a natural lead-in to additional content.",
//     image: "https://source.unsplash.com/random",
//     imageLabel: "Image Text",
//   },
// ];

// const posts = [post1, post2, post3];

const sidebar = {
  title: "About",
  description:
    "Associated Engineering Student Body (AESB) is the College Council of the College of Engineering here at California State University, Long Beach. AESB is the largest Associated Student Body at CSULB which is currently associated with more than 20 organizations. AESB advises the COE Dean of its recommendations on matters concerning the general welfare of the COE students. AESB is also a liaison between the COE administration, faculty, recognized student organizations, and members of the COE student body.",
  archives: [
    { title: "March 2020", url: "#" },
    { title: "February 2020", url: "#" },
    { title: "January 2020", url: "#" },
    { title: "November 1999", url: "#" },
    { title: "October 1999", url: "#" },
    { title: "September 1999", url: "#" },
    { title: "August 1999", url: "#" },
    { title: "July 1999", url: "#" },
    { title: "June 1999", url: "#" },
    { title: "May 1999", url: "#" },
    { title: "April 1999", url: "#" },
  ],
  social: [
    {
      name: "Email",
      icon: MailOutlineIcon,
      socialURL: "mailto:webmaster@aesb.org",
    },
    {
      name: "Instagram",
      icon: InstagramIcon,
      socialURL: "https://www.instagram.com/csulbaesb/",
    },
  ],
};

const MaterialUISwitch = styled(Switch)(({ theme }) => ({
  width: 62,
  height: 34,
  padding: 7,
  "& .MuiSwitch-switchBase": {
    margin: 1,
    padding: 0,
    transform: "translateX(6px)",
    "&.Mui-checked": {
      color: "#fff",
      transform: "translateX(22px)",
      "& .MuiSwitch-thumb:before": {
        backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
          "#fff"
        )}" d="M4.2 2.5l-.7 1.8-1.8.7 1.8.7.7 1.8.6-1.8L6.7 5l-1.9-.7-.6-1.8zm15 8.3a6.7 6.7 0 11-6.6-6.6 5.8 5.8 0 006.6 6.6z"/></svg>')`,
      },
      "& + .MuiSwitch-track": {
        opacity: 1,
        backgroundColor: theme.palette.mode === "dark" ? "#8796A5" : "#aab4be",
      },
    },
  },
  "& .MuiSwitch-thumb": {
    backgroundColor: theme.palette.mode === "dark" ? "#003892" : "#001e3c",
    width: 32,
    height: 32,
    "&:before": {
      content: "''",
      position: "absolute",
      width: "100%",
      height: "100%",
      left: 0,
      top: 0,
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
        "#fff"
      )}" d="M9.305 1.667V3.75h1.389V1.667h-1.39zm-4.707 1.95l-.982.982L5.09 6.072l.982-.982-1.473-1.473zm10.802 0L13.927 5.09l.982.982 1.473-1.473-.982-.982zM10 5.139a4.872 4.872 0 00-4.862 4.86A4.872 4.872 0 0010 14.862 4.872 4.872 0 0014.86 10 4.872 4.872 0 0010 5.139zm0 1.389A3.462 3.462 0 0113.471 10a3.462 3.462 0 01-3.473 3.472A3.462 3.462 0 016.527 10 3.462 3.462 0 0110 6.528zM1.665 9.305v1.39h2.083v-1.39H1.666zm14.583 0v1.39h2.084v-1.39h-2.084zM5.09 13.928L3.616 15.4l.982.982 1.473-1.473-.982-.982zm9.82 0l-.982.982 1.473 1.473.982-.982-1.473-1.473zM9.305 16.25v2.083h1.389V16.25h-1.39z"/></svg>')`,
    },
  },
  "& .MuiSwitch-track": {
    opacity: 1,
    backgroundColor: theme.palette.mode === "dark" ? "#8796A5" : "#aab4be",
    borderRadius: 20 / 2,
  },
}));

export default function Blog() {
  const [mode, setMode] = React.useState("light");
  const themeToggler = () => {
    mode === "light" ? setMode("dark") : setMode("light");
  };

  return (
    <ThemeProvider theme={mode === "dark" ? light : dark}>
      <CssBaseline />
      <Container maxWidth="lg">
        <Header title="CSULB AESB" sections={sections} />
        <MaterialUISwitch
          onChange={() => themeToggler()}
          sx={{ m: 1 }}
          defaultChecked
        />
        <main>
          <MainFeaturedPost post={mainFeaturedPost} />
          {/* <Grid container spacing={4}>
            {featuredPosts.map((post) => (
              <FeaturedPost key={post.title} post={post} />
            ))}
          </Grid> */}
          <Grid container spacing={5} sx={{ mt: 3 }}>
            <Main title="Blog Posts" />
            <Sidebar
              title={sidebar.title}
              description={sidebar.description}
              archives={sidebar.archives}
              social={sidebar.social}
            />
          </Grid>
        </main>
      </Container>
      <Footer description={footerInfo} />
    </ThemeProvider>
  );
}

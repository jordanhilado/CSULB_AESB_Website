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
import post1 from "./blog-post.1.md";
import post2 from "./blog-post.2.md";
import post3 from "./blog-post.3.md";
import { sections } from "./Sections";
import { theme } from "./theme";
import { footerInfo } from "../assets/footerInfo";

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

const posts = [post1, post2, post3];

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

export default function Blog() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="lg">
        <Header title="CSULB AESB" sections={sections} />
        <main>
          <MainFeaturedPost post={mainFeaturedPost} />
          {/* <Grid container spacing={4}>
            {featuredPosts.map((post) => (
              <FeaturedPost key={post.title} post={post} />
            ))}
          </Grid> */}
          <Grid container spacing={5} sx={{ mt: 3 }}>
            <Main title="Blog Updates" posts={posts} />
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

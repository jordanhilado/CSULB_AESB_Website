import * as React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import { blogInfo } from "../assets/blogInfo";
import { color } from "../assets/color";

interface MainProps {
  title: string;
}

export default function Main(props: MainProps) {
  const { title } = props;

  return (
    <Grid
      style={{ color: "#E4E6EB" }}
      item
      xs={12}
      md={8}
      sx={{
        "& .markdown": {
          py: 3,
        },
      }}
    >
      <Typography variant="h6" gutterBottom>
        {title}
      </Typography>
      <Divider style={{ backgroundColor: "#3A3B3C" }} />
      {blogInfo.map((blog) => (
        <>
          <h1>{blog.title}</h1>
          <p style={{ fontStyle: "italic" }}>{blog.subtitle}</p>
          <p>{blog.body}</p>
          <a
            style={{ color: color.secondary, textDecoration: "underline" }}
            href={blog.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            {blog.linkname}
          </a>
          <Divider style={{ backgroundColor: "#3A3B3C", marginTop: 20 }} />
        </>
      ))}
    </Grid>
  );
}

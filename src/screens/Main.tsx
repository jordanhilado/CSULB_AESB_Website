import * as React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import { blogInfo } from "./blogInfo";

interface MainProps {
  posts: ReadonlyArray<string>;
  title: string;
}

export default function Main(props: MainProps) {
  const { posts, title } = props;

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
          <Divider />
        </>
      ))}
    </Grid>
  );
}

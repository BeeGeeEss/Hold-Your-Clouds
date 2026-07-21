import { Box, Grid, Typography } from "@mui/material";

import BlogCard from "../blog/BlogCard";

export default function BlogList({ posts }) {
  return (
    <Box
      sx={{
        width: "100%",
        pb: 8,
      }}
    >
      <Typography
        variant="h1"
        component="h1"
        sx={{
          textAlign: "center",
          mb: 2,
          fontWeight: 700,
        }}
      >
        Blog
      </Typography>

      <Typography
        variant="body1"
        color="text.secondary"
        sx={{
          textAlign: "center",
          maxWidth: 700,
          mx: "auto",
          mb: 5,
        }}
      >
        Thoughts, lessons and experiences from my journey learning web
        development and building things on the internet.
      </Typography>

      <Grid container spacing={3}>
        {posts.map((post) => (
          <Grid
            key={post.id}
            size={{
              xs: 12,
              sm: 6,
              md: 4,
            }}
          >
            <BlogCard post={post} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

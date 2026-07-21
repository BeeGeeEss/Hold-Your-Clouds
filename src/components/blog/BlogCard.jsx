import { Link } from "react-router-dom";
import { Card, CardContent, Typography, Button, Box } from "@mui/material";

export default function BlogCard({ post }) {
  return (
    <Card
      sx={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        borderRadius: 3,
        transition: "transform 0.2s ease, box-shadow 0.2s ease",

        "&:hover": {
          transform: "translateY(-4px)",
          boxShadow: 6,
        },
      }}
    >
      <CardContent
        sx={{
          flexGrow: 1,
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Typography
          variant="overline"
          color="primary"
          sx={{
            fontWeight: 700,
          }}
        >
          {post.category}
        </Typography>

        <Typography
          variant="h5"
          component="h2"
          sx={{
            fontWeight: 700,
            mb: 1,
          }}
        >
          {post.title}
        </Typography>

        <Typography
          variant="body2"
          color="text.secondary"
          sx={{
            mb: 2,
          }}
        >
          {post.excerpt}
        </Typography>

        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mt: "auto",
          }}
        >
          <Typography variant="caption" color="text.secondary">
            {post.date} · {post.readTime}
          </Typography>

          <Button
            component={Link}
            to={`/blog/${post.slug}`}
            variant="contained"
            size="small"
          >
            Read More
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
}

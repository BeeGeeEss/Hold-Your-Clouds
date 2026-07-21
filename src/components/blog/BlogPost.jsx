import { Container, Typography, Box } from "@mui/material";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

import PostActions from "./PostActions";

export default function BlogPost({ post }) {
  if (!post) {
    return (
      <Container sx={{ py: 6 }}>
        <Typography variant="h4">Post not found</Typography>
      </Container>
    );
  }

  return (
    <Container
      maxWidth="md"
      sx={{
        py: 6,
      }}
    >
      <Box
        component="header"
        sx={{
          mb: 5,
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
          variant="h1"
          component="h1"
          sx={{
            fontWeight: 700,
            mb: 2,
          }}
        >
          {post.title}
        </Typography>

        <Typography variant="body2" color="text.secondary">
          {post.date} · {post.readTime}
        </Typography>
      </Box>

      <Box className="markdown-content">
        <ReactMarkdown remarkPlugins={[remarkGfm]}>
          {post.content}
        </ReactMarkdown>
      </Box>

      <PostActions post={post} />
    </Container>
  );
}

import {
  Box,
  Button,
  Container,
  Grid,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
import CodeIcon from "@mui/icons-material/Code";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import LocalCafeIcon from "@mui/icons-material/LocalCafe";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

import BlogCard from "../components/blog/BlogCard";
import LightLogo from "../assets/light-logo.png";
import AuthorImage from "../assets/profile.png";
import posts from "../data/posts";

export default function HomePage() {
  const latestPosts = posts.slice(0, 3);
  const featuredPost = posts[0];

  return (
    <Box className="home-page">
      {/* HERO SECTION */}
      <Box
        sx={{
          background:
            "linear-gradient(135deg, #f5efff 0%, #ffffff 55%, #eee5ff 100%)",
          py: { xs: 8, md: 12 },
          position: "relative",
          overflow: "hidden",
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={6} alignItems="center">
            {/* HERO TEXT */}
            <Grid size={{ xs: 12, md: 6 }}>
              <Typography
                variant="overline"
                sx={{
                  color: "primary.main",
                  fontWeight: 700,
                  letterSpacing: 2,
                }}
              >
                Welcome to
              </Typography>

              <Typography
                variant="h1"
                sx={{
                  fontWeight: 700,
                  fontSize: {
                    xs: "2.8rem",
                    md: "4.5rem",
                  },
                  lineHeight: 1.05,
                  mb: 3,
                }}
              >
                Hold Your Clouds
              </Typography>

              <Typography
                variant="h5"
                sx={{
                  maxWidth: 600,
                  lineHeight: 1.6,
                  mb: 4,
                  fontWeight: 400,
                }}
              >
                A space for thoughts on web development, personal growth, and
                creating a life — and code — you love.
              </Typography>

              <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
                <Button
                  component={Link}
                  to="/blog"
                  variant="contained"
                  size="large"
                  endIcon={<ArrowForwardIcon />}
                >
                  Read the Blog
                </Button>

                <Button
                  component={Link}
                  to="/about"
                  variant="outlined"
                  size="large"
                >
                  About Me
                </Button>
              </Stack>
            </Grid>

            {/* HERO IMAGE / ILLUSTRATION */}
            <Grid size={{ xs: 12, md: 6 }}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Box
                  component="img"
                  src={LightLogo}
                  alt="Illustration of a developer working at a laptop"
                  sx={{
                    width: "100%",
                    maxWidth: 350,
                    height: "auto",
                  }}
                />
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* TOPIC CARDS */}
      <Container
        maxWidth="lg"
        sx={{
          mt: { xs: 4, md: -5 },
          position: "relative",
          zIndex: 2,
        }}
      >
        <Paper
          elevation={3}
          sx={{
            p: { xs: 3, md: 4 },
            borderRadius: 4,
          }}
        >
          <Grid container spacing={4}>
            <Topic
              icon={<CodeIcon />}
              title="Web Development"
              text="Tips, tutorials and lessons from my coding journey."
            />

            <Topic
              icon={<FavoriteBorderIcon />}
              title="Wellness & Mindset"
              text="Thoughts on mental health, balance and growth."
            />

            <Topic
              icon={<MenuBookIcon />}
              title="Learning in Public"
              text="Sharing what I'm learning and building in real time."
            />

            <Topic
              icon={<LocalCafeIcon />}
              title="Life & Everything"
              text="A little bit of life, books, random thoughts and more."
            />
          </Grid>
        </Paper>
      </Container>

      {/* FEATURED POST + ABOUT */}
      <Container
        maxWidth="lg"
        sx={{
          py: { xs: 8, md: 10 },
        }}
      >
        <Grid container spacing={5}>
          {/* FEATURED POST */}
          <Grid size={{ xs: 12, md: 7 }}>
            <SectionHeading
              label="Featured Post"
              title="Something worth reading"
            />

            {featuredPost && (
              <Paper
                sx={{
                  overflow: "hidden",
                  borderRadius: 4,
                }}
              >
                <Grid container>
                  <Grid size={{ xs: 12, md: 6 }}>
                    {featuredPost.image && (
                      <Box
                        component="img"
                        src={featuredPost.image}
                        alt={featuredPost.title}
                        sx={{
                          width: "100%",
                          height: "100%",
                          minHeight: 280,
                          objectFit: "cover",
                        }}
                      />
                    )}
                  </Grid>

                  <Grid size={{ xs: 12, md: 6 }}>
                    <Box sx={{ p: 4 }}>
                      <Typography
                        variant="overline"
                        color="primary"
                        fontWeight={700}
                      >
                        {featuredPost.category}
                      </Typography>

                      <Typography
                        variant="h4"
                        sx={{
                          mt: 1,
                          mb: 2,
                          fontWeight: 700,
                        }}
                      >
                        {featuredPost.title}
                      </Typography>

                      <Typography color="text.secondary" sx={{ mb: 3 }}>
                        {featuredPost.excerpt}
                      </Typography>

                      <Button
                        component={Link}
                        to={`/blog/${featuredPost.slug}`}
                        endIcon={<ArrowForwardIcon />}
                      >
                        Read more
                      </Button>
                    </Box>
                  </Grid>
                </Grid>
              </Paper>
            )}
          </Grid>

          {/* ABOUT ME */}
          <Grid size={{ xs: 12, md: 5 }}>
            <SectionHeading
              label="Hi, I'm the author"
              title="Hey, I'm Brando 👋"
            />

            <Paper
              sx={{
                p: 4,
                height: "100%",
                borderRadius: 4,
              }}
            >
              <Stack
                direction={{ xs: "column", sm: "row" }}
                spacing={3}
                alignItems={{ xs: "center", sm: "flex-start" }}
              >
                <Box
                  component="img"
                  src={AuthorImage}
                  alt="Brando"
                  sx={{
                    width: 110,
                    height: 110,
                    borderRadius: "50%",
                    objectFit: "cover",
                  }}
                />

                <Box>
                  <Typography variant="body1" sx={{ mb: 2 }}>
                    I'm a full stack web developer in the making, a psychology
                    student, and a firm believer in progress over perfection.
                  </Typography>

                  <Typography variant="body1" sx={{ mb: 3 }}>
                    This blog is where I share what I'm learning, building and
                    discovering along the way.
                  </Typography>

                  <Button
                    component={Link}
                    to="/about"
                    endIcon={<ArrowForwardIcon />}
                  >
                    More about me
                  </Button>
                </Box>
              </Stack>
            </Paper>
          </Grid>
        </Grid>
      </Container>

      {/* LATEST POSTS */}
      <Container maxWidth="lg" sx={{ pb: { xs: 8, md: 10 } }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mb: 4,
          }}
        >
          <SectionHeading label="Latest Posts" title="What's new" />

          <Button component={Link} to="/blog" endIcon={<ArrowForwardIcon />}>
            View all posts
          </Button>
        </Box>

        <Grid container spacing={4}>
          {latestPosts.map((post) => (
            <Grid key={post.id || post.slug} size={{ xs: 12, md: 4 }}>
              <BlogCard post={post} />
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* SUBSCRIBE SECTION */}
      <Box
        sx={{
          py: 8,
          backgroundColor: "primary.light",
        }}
      >
        <Container maxWidth="md">
          <Paper
            sx={{
              p: { xs: 4, md: 6 },
              borderRadius: 4,
              textAlign: "center",
            }}
          >
            <Typography variant="h3" sx={{ mb: 2 }}>
              Enjoying the content?
            </Typography>

            <Typography color="text.secondary" sx={{ mb: 4 }}>
              Subscribe to get new posts and updates in your inbox.
            </Typography>

            <Stack
              direction={{ xs: "column", sm: "row" }}
              spacing={2}
              justifyContent="center"
            >
              <Box
                component="input"
                type="email"
                placeholder="Your email address"
                sx={{
                  flex: 1,
                  maxWidth: 400,
                  px: 2,
                  py: 1.5,
                  borderRadius: 2,
                  border: "1px solid",
                  borderColor: "divider",
                  fontSize: "1rem",
                  backgroundColor: "background.paper",
                }}
              />

              <Button variant="contained" size="large">
                Subscribe
              </Button>
            </Stack>
          </Paper>
        </Container>
      </Box>
    </Box>
  );
}

/* ----------------------------- */
/* REUSABLE COMPONENTS */
/* ----------------------------- */

function Topic({ icon, title, text }) {
  return (
    <Grid size={{ xs: 12, sm: 6, md: 3 }}>
      <Stack direction="row" spacing={2} alignItems="flex-start">
        <Box
          sx={{
            width: 48,
            height: 48,
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "primary.light",
            color: "primary.main",
            flexShrink: 0,
          }}
        >
          {icon}
        </Box>

        <Box>
          <Typography variant="h6" fontWeight={700} sx={{ mb: 0.5 }}>
            {title}
          </Typography>

          <Typography variant="body2" color="text.secondary">
            {text}
          </Typography>
        </Box>
      </Stack>
    </Grid>
  );
}

function SectionHeading({ label, title }) {
  return (
    <Box sx={{ mb: 3 }}>
      <Typography
        variant="overline"
        color="primary"
        fontWeight={700}
        letterSpacing={1.5}
      >
        {label}
      </Typography>

      <Typography
        variant="h3"
        sx={{
          fontWeight: 700,
          mt: 0.5,
        }}
      >
        {title}
      </Typography>
    </Box>
  );
}

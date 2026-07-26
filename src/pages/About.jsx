import { Box, Button, Container, Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import UnderConstruction from "../assets/under-construction.svg";

export default function About() {
  return (
    <Container
      maxWidth="md"
      sx={{
        minHeight: "70vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        py: 8,
      }}
    >
      <Stack spacing={4} alignItems="center" textAlign="center">
        {/* Under Construction Illustration */}
        <Box
          component="img"
          src={UnderConstruction}
          alt="A cloud character working on a website under construction"
          sx={{
            width: "100%",
            maxWidth: 520,
            height: "auto",
          }}
        />

        <Stack spacing={2} alignItems="center">
          <Typography
            variant="h2"
            component="h1"
            sx={{
              fontWeight: 700,
              color: "#8C52FF",
              fontSize: {
                xs: "2.4rem",
                sm: "3.5rem",
              },
            }}
          >
            Under Construction
          </Typography>

          <Typography
            variant="h6"
            sx={{
              maxWidth: 600,
              color: "text.secondary",
              lineHeight: 1.7,
            }}
          >
            This little corner of the cloud is still being built. Check back
            soon for something new!
          </Typography>
        </Stack>

        <Button
          component={Link}
          to="/"
          variant="contained"
          size="large"
          sx={{
            backgroundColor: "#8C52FF",
            borderRadius: "999px",
            px: 4,
            py: 1.5,
            fontWeight: 700,
            textTransform: "none",
            boxShadow: "0 8px 20px rgba(140, 82, 255, 0.25)",

            "&:hover": {
              backgroundColor: "#7440D9",
            },
          }}
        >
          Take Me Home
        </Button>
      </Stack>
    </Container>
  );
}

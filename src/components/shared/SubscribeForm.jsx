import { useState } from "react";
import {
  Box,
  Button,
  Container,
  Paper,
  Stack,
  Typography,
} from "@mui/material";

export default function SubscribeForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("idle");

  async function handleSubmit(event) {
    event.preventDefault();

    setStatus("loading");

    try {
      const response = await fetch("/.netlify/functions/subscribe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Subscription failed");
      }

      setStatus("success");
      setEmail("");
    } catch (error) {
      console.error("Subscription error:", error);
      setStatus("error");
    }
  }

  return (
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

          <Box component="form" onSubmit={handleSubmit}>
            <Stack
              direction={{ xs: "column", sm: "row" }}
              spacing={2}
              justifyContent="center"
            >
              <Box
                component="input"
                type="email"
                required
                value={email}
                onChange={(event) => setEmail(event.target.value)}
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

              <Button
                type="submit"
                variant="contained"
                size="large"
                disabled={status === "loading"}
              >
                {status === "loading" ? "Subscribing..." : "Subscribe"}
              </Button>
            </Stack>
          </Box>

          {status === "success" && (
            <Typography color="success.main" sx={{ mt: 3 }}>
              Thanks for subscribing! ☁
            </Typography>
          )}

          {status === "error" && (
            <Typography color="error.main" sx={{ mt: 3 }}>
              Something went wrong. Please try again.
            </Typography>
          )}
        </Paper>
      </Container>
      ){" "}
    </Box>
  );
}

import { useState } from "react";
import { Box, Button, Paper, Stack, Typography } from "@mui/material";

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

      const responseText = await response.text();

      console.log("Response status:", response.status);
      console.log("Response body:", responseText);

      let data = {};

      if (responseText) {
        try {
          data = JSON.parse(responseText);
        } catch {
          throw new Error(
            `The server returned an invalid response (${response.status})`,
          );
        }
      }

      if (!response.ok) {
        throw new Error(data.message || "Subscription failed");
      }

      setStatus("success");
      setEmail("");
    } catch (error) {
      console.error("Subscription error:", error);
      setStatus(error.message || "Something went wrong");
    }
  }

  return (
    <Paper
      sx={{
        p: { xs: 3, md: 4 },
        mb: 6,
        borderRadius: 3,
        textAlign: "center",
      }}
    >
      <Typography
        variant="h5"
        sx={{
          mb: 1,
          fontWeight: 700,
        }}
      >
        Subscribe to the blog{" "}
      </Typography>

      <Typography
        color="text.secondary"
        sx={{
          mb: 3,
        }}
      >
        Get new posts delivered straight to your inbox.
      </Typography>

      <Box component="form" onSubmit={handleSubmit}>
        <Stack
          direction={{ xs: "column", sm: "row" }}
          spacing={1}
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
              minWidth: 0,
              px: 2,
              py: 1.5,
              borderRadius: 1,
              border: "1px solid",
              borderColor: "divider",
              fontSize: "1rem",
              backgroundColor: "background.paper",
            }}
          />

          <Button
            type="submit"
            variant="contained"
            disabled={status === "loading"}
          >
            {status === "loading" ? "Subscribing..." : "Subscribe"}
          </Button>
        </Stack>
      </Box>

      {status === "success" && (
        <Typography color="success.main" sx={{ mt: 2 }}>
          Thanks for subscribing! ☁
        </Typography>
      )}

      {status !== "idle" && status !== "loading" && status !== "success" && (
        <Typography color="error.main" sx={{ mt: 2 }}>
          {status}
        </Typography>
      )}
    </Paper>
  );
}

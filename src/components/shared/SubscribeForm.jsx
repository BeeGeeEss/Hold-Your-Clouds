import {
  Box,
  Button,
  Container,
  Paper,
  Stack,
  Typography,
} from "@mui/material";

export default function SubscribeForm() {
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
  );
}

import { useState } from "react";
import {
  Alert,
  Box,
  Button,
  Card,
  CardContent,
  Container,
  Grid,
  Stack,
  TextField,
  Typography,
} from "@mui/material";

import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";

export default function Contact() {
  const [status, setStatus] = useState({
    type: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleSubmit(event) {
    event.preventDefault();

    setIsSubmitting(true);
    setStatus({
      type: "",
      message: "",
    });

    const formData = new FormData(event.target);

    formData.append("access_key", "a7842fb9-516b-46e4-b8ad-3413b565cd88");

    formData.append(
      "subject",
      "New Contact Form Submission - Hold Your Clouds",
    );

    formData.append("from_name", "Hold Your Clouds Website");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: json,
      });

      const result = await response.json();

      if (result.success) {
        setStatus({
          type: "success",
          message: "Thanks for getting in touch! Your message has been sent.",
        });

        event.target.reset();
      } else {
        setStatus({
          type: "error",
          message: "Something went wrong. Please try again.",
        });
      }
    } catch (error) {
      setStatus({
        type: "error",
        message: "Something went wrong. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <Container
      maxWidth="lg"
      sx={{
        py: {
          xs: 5,
          md: 8,
        },
      }}
    >
      {/* Page Heading */}
      <Stack spacing={2} alignItems="center" textAlign="center" sx={{ mb: 6 }}>
        <Typography
          variant="h1"
          component="h1"
          sx={{
            fontWeight: 700,
            color: "#8C52FF",
            fontSize: {
              xs: "2.5rem",
              md: "4rem",
            },
          }}
        >
          Get In Touch
        </Typography>

        <Typography
          variant="h6"
          color="text.secondary"
          sx={{
            maxWidth: 650,
            lineHeight: 1.7,
          }}
        >
          Whether you want to connect, collaborate, or just say hello, I'd love
          to hear from you.
        </Typography>
      </Stack>

      <Grid container spacing={4} alignItems="stretch">
        {/* Contact Cards */}
        <Grid
          size={{
            xs: 12,
            md: 5,
          }}
        >
          <Stack spacing={3}>
            {/* LinkedIn */}
            <Card
              component="a"
              href="https://www.linkedin.com/in/brando-smith-22191b3b9/"
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                textDecoration: "none",
                color: "inherit",
                borderRadius: 4,
                height: "100%",
                transition: "transform 0.2s ease, box-shadow 0.2s ease",

                "&:hover": {
                  transform: "translateY(-5px)",
                  boxShadow: "0 12px 30px rgba(140, 82, 255, 0.2)",
                },
              }}
            >
              <CardContent sx={{ p: 3 }}>
                <Stack direction="row" spacing={2} alignItems="center">
                  <Box
                    sx={{
                      width: 58,
                      height: 58,
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      backgroundColor: "#8C52FF",
                      color: "white",
                    }}
                  >
                    <LinkedInIcon fontSize="large" />
                  </Box>

                  <Box>
                    <Typography variant="h6" fontWeight={700}>
                      LinkedIn
                    </Typography>

                    <Typography variant="body2" color="text.secondary">
                      Connect with me professionally
                    </Typography>
                  </Box>
                </Stack>
              </CardContent>
            </Card>

            {/* GitHub */}
            <Card
              component="a"
              href="https://github.com/BeeGeeEss"
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                textDecoration: "none",
                color: "inherit",
                borderRadius: 4,
                height: "100%",
                transition: "transform 0.2s ease, box-shadow 0.2s ease",

                "&:hover": {
                  transform: "translateY(-5px)",
                  boxShadow: "0 12px 30px rgba(126, 217, 87, 0.2)",
                },
              }}
            >
              <CardContent sx={{ p: 3 }}>
                <Stack direction="row" spacing={2} alignItems="center">
                  <Box
                    sx={{
                      width: 58,
                      height: 58,
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      backgroundColor: "#D8B4FE",
                      color: "#342052",
                    }}
                  >
                    <GitHubIcon fontSize="large" />
                  </Box>

                  <Box>
                    <Typography variant="h6" fontWeight={700}>
                      GitHub
                    </Typography>

                    <Typography variant="body2" color="text.secondary">
                      Explore my projects and code
                    </Typography>
                  </Box>
                </Stack>
              </CardContent>
            </Card>

            {/* Email */}
            <Card
              sx={{
                borderRadius: 4,
                height: "100%",
              }}
            >
              <CardContent sx={{ p: 3 }}>
                <Stack direction="row" spacing={2} alignItems="center">
                  <Box
                    sx={{
                      width: 58,
                      height: 58,
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      backgroundColor: "#342052",
                      color: "white",
                    }}
                  >
                    <EmailOutlinedIcon fontSize="large" />
                  </Box>

                  <Box>
                    <Typography variant="h6" fontWeight={700}>
                      Email Me
                    </Typography>

                    <Typography variant="body2" color="text.secondary">
                      Send me a message using the form
                    </Typography>
                  </Box>
                </Stack>
              </CardContent>
            </Card>
          </Stack>
        </Grid>

        {/* Contact Form */}
        <Grid
          size={{
            xs: 12,
            md: 7,
          }}
        >
          <Card
            sx={{
              borderRadius: 4,
              height: "100%",
            }}
          >
            <CardContent sx={{ p: { xs: 3, md: 4 } }}>
              <Stack component="form" spacing={3} onSubmit={handleSubmit}>
                <Typography variant="h5" fontWeight={700}>
                  Send a Message
                </Typography>

                <TextField label="Name" name="name" required fullWidth />

                <TextField
                  label="Email"
                  name="email"
                  type="email"
                  required
                  fullWidth
                />

                <TextField label="Subject" name="subject" required fullWidth />

                <TextField
                  label="Message"
                  name="message"
                  required
                  fullWidth
                  multiline
                  minRows={6}
                />

                {status.message && (
                  <Alert severity={status.type}>{status.message}</Alert>
                )}

                <Button
                  type="submit"
                  variant="contained"
                  size="large"
                  disabled={isSubmitting}
                  sx={{
                    alignSelf: "flex-start",
                    backgroundColor: "#8C52FF",
                    borderRadius: "999px",
                    px: 4,
                    py: 1.5,
                    fontWeight: 700,
                    textTransform: "none",

                    "&:hover": {
                      backgroundColor: "#7440D9",
                    },
                  }}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </Stack>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
}

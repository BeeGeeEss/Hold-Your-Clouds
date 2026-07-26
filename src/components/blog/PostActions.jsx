import { useState } from "react";

import { Box, Button, Divider, TextField, Typography } from "@mui/material";

import GiscusComments from "../shared/GiscusComments";

export default function PostActions() {
const [email, setEmail] = useState("");

function handleSubscribe(event) {
event.preventDefault();

if (!email) {
  return;
}

/*
  Replace this with your Buttondown form endpoint.

  Example:

  fetch("https://buttondown.com/api/emails/embed-subscribe/YOUR_USERNAME", {
    method: "POST",
    body: new FormData(event.target),
  });
*/

alert("Thanks for subscribing!");

setEmail("");
```

}

return (
<Box
sx={{
mt: 6,
}}
>
<Divider sx={{ mb: 4 }} />

```
  {/* SUBSCRIBE */}

  <Box
    sx={{
      textAlign: "center",
      mb: 6,
    }}
  >
    <Typography
      variant="h5"
      sx={{
        mb: 1,
        fontWeight: 700,
      }}
    >
      Subscribe to the blog
    </Typography>

    <Typography
      variant="body2"
      color="text.secondary"
      sx={{
        mb: 3,
      }}
    >
      Get new posts delivered straight to your inbox.
    </Typography>

    <Box
      component="form"
      onSubmit={handleSubscribe}
      sx={{
        display: "flex",
        gap: 1,
        maxWidth: 500,
        mx: "auto",
      }}
    >
      <TextField
        fullWidth
        type="email"
        label="Email address"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
        required
      />

      <Button type="submit" variant="contained">
        Subscribe
      </Button>
    </Box>
  </Box>

  {/* COMMENTS */}

  <GiscusComments />
</Box>
);
}

import { Box, Divider } from "@mui/material";

import GiscusComments from "../shared/GiscusComments";
import SubscribeForm from "../shared/SubscribeForm";

export default function PostActions() {
  return (
    <Box
      sx={{
        mt: 6,
      }}
    >
      <Divider sx={{ mb: 4 }} />
      {/* SUBSCRIBE */}
      <SubscribeForm />

      {/* COMMENTS */}
      <GiscusComments />
    </Box>
  );
}

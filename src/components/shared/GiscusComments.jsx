import Giscus from "@giscus/react";
import { useTheme } from "@mui/material/styles";

export default function GiscusComments() {
  const theme = useTheme();

  return (
    <section>
      <Giscus
        repo="BeeGeeEss/Hold-Your-Clouds"
        repoId="YOUR_REPOSITORY_ID"
        category="Announcements"
        categoryId="YOUR_CATEGORY_ID"
        mapping="pathname"
        reactionsEnabled="1"
        emitMetadata="0"
        inputPosition="top"
        theme={theme.palette.mode === "dark" ? "dark" : "light"}
        lang="en"
      />
    </section>
  );
}

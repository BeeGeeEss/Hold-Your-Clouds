import Giscus from "@giscus/react";
import { useTheme } from "@mui/material/styles";

export default function GiscusComments() {
  const theme = useTheme();

  const giscusTheme =
    theme.palette.mode === "dark" ? "catppuccin_macchiato" : "catppuccin_latte";

  return (
    <section>
      <Giscus
        key={theme.palette.mode}
        repo={import.meta.env.VITE_GISCUS_REPO}
        repoId={import.meta.env.VITE_GISCUS_REPO_ID}
        category={import.meta.env.VITE_GISCUS_CATEGORY}
        categoryId={import.meta.env.VITE_GISCUS_CATEGORY_ID}
        mapping="pathname"
        reactionsEnabled="1"
        emitMetadata="0"
        inputPosition="top"
        theme={giscusTheme}
        lang="en"
      />
    </section>
  );
}

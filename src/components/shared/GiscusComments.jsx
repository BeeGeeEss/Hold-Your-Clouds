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
        repo="BeeGeeEss/Hold-Your-Clouds"
        repoId="R_kgDOTcMoug"
        category="Announcements"
        categoryId="DIC_kwDOTcMous4DBn-X"
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

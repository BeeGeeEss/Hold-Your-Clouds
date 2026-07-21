import Giscus from "@giscus/react";
import { useTheme } from "@mui/material/styles";

export default function GiscusComments() {
  const theme = useTheme();

  return (
    <section>
      <Giscus
        repo="BeeGeeEss/Hold-Your-Clouds"
        repoId="R_kgDOTcMoug"
        category="Announcements"
        categoryId="DIC_kwDOTcMous4DBn-X"
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

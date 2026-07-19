import { useMediaQuery } from "@mui/material";
import { useLocation } from "react-router-dom";

import lightLogo from "/src/assets/light-logo.png";
import darkLogo from "/src/assets/dark-banner.png";

function Header() {
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
  const location = useLocation();

  const isContactPage = location.pathname === "/contact";

  const logo = isContactPage
    ? lightLogo
    : prefersDarkMode
      ? darkLogo
      : lightLogo;

  return (
    <header
      style={{
        width: "100%",
        margin: 0,
        padding: 0,
        lineHeight: 0,
        textAlign: "center",
        backgroundColor: isContactPage ? "#FFFFFF" : "transparent",
      }}
    >
      <img
        src={logo}
        alt="Hold Your Clouds Banner"
        style={{
          display: "block",
          width: isContactPage ? "800px" : "100%",
          height: "auto",
          margin: isContactPage ? "0 auto" : 0,
        }}
      />
    </header>
  );
}

export default Header;

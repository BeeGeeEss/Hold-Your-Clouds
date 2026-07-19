import { useMediaQuery } from "@mui/material";
import { Link, useLocation } from "react-router-dom";

import lightLogo from "/src/assets/light-logo.png";
import darkBanner from "/src/assets/dark-banner.png";
import lightBanner from "/src/assets/light-banner.png";

function Header() {
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
  const location = useLocation();

  const isContactPage = location.pathname === "/contact";

  const logo = isContactPage
    ? lightLogo
    : prefersDarkMode
      ? darkBanner
      : lightBanner;

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
      <Link
        to="/contact"
        style={{
          display: "block",
          width: "100%",
          cursor: "pointer",
        }}
      >
        <img
          src={logo}
          alt="Hold Your Clouds Banner"
          style={{
            display: "block",
            width: isContactPage ? "450px" : "100%",
            height: "auto",
            margin: isContactPage ? "0 auto" : 0,
          }}
        />
      </Link>
    </header>
  );
}

export default Header;

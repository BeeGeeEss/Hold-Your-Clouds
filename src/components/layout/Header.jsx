import { useMediaQuery } from "@mui/material";
import { Link, useLocation } from "react-router-dom";

import lightLogo from "/src/assets/light-logo.png";
import darkBanner from "/src/assets/dark-banner.png";
import lightBanner from "/src/assets/light-banner.png";

function Header() {
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
  const location = useLocation();

  const isHomePage = location.pathname === "/";

  // Homepage responds to theme
  // All other pages always use the light logo
  const image = isHomePage
    ? prefersDarkMode
      ? darkBanner
      : lightBanner
    : lightLogo;

  return (
    <header
      className={isHomePage ? "home-header" : "standard-header"}
      style={{
        backgroundColor: isHomePage
          ? prefersDarkMode
            ? "#121212"
            : "#FFFFFF"
          : "#FFFFFF",
      }}
    >
      {isHomePage && <div className="header-sidebar" />}

      <Link
        to="/contact"
        style={{
          display: "block",
          width: "100%",
          cursor: "pointer",
        }}
      >
        <img
          src={image}
          alt="Hold Your Clouds Banner"
          className={isHomePage ? "home-banner" : "standard-logo"}
        />
      </Link>

      {isHomePage && <div className="header-sidebar" />}
    </header>
  );
}

export default Header;

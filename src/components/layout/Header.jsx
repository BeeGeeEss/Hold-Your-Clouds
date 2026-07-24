import { useMediaQuery } from "@mui/material";
import { Link, useLocation } from "react-router-dom";

import lightLogo from "/src/assets/light-logo.png";
import darkLogo from "/src/assets/dark-logo.png";

import darkBanner from "/src/assets/dark-banner.png";
import lightBanner from "/src/assets/light-banner.png";

function Header() {
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
  const location = useLocation();

  const isHomePage = location.pathname === "/";

  /*
   * HOMEPAGE:
   * - Light theme → light banner + white background
   * - Dark theme → dark banner + cosmic navy background
   *
   * OTHER PAGES:
   * - Light theme → light logo + white background
   * - Dark theme → dark logo + cosmic navy background
   */

  const image = isHomePage
    ? prefersDarkMode
      ? darkBanner
      : lightBanner
    : prefersDarkMode
      ? darkLogo
      : lightLogo;

  const backgroundColor = prefersDarkMode ? "#080B18" : "#FFFFFF";

  return (
    <header
      className={isHomePage ? "home-header" : "standard-header"}
      style={{
        backgroundColor,
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

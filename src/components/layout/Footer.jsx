import { useMediaQuery } from "@mui/material";
import { useLocation } from "react-router-dom";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
  const location = useLocation();

  const isContactPage = location.pathname === "/contact";

  const isDarkTheme = !isContactPage && prefersDarkMode;

  return (
    <footer
      style={{
        textAlign: "center",
        width: "100%",
        padding: "1rem 0",
        backgroundColor: isDarkTheme ? "#0B0D2B" : "#FFFFFF",
      }}
    >
      <h5>
        <a
          href="https://github.com/BeeGeeEss"
          rel="noopener noreferrer"
          target="_blank"
          style={{
            color: isDarkTheme ? "#FFFFFF" : "#0B0D2B",
            textDecoration: "none",
          }}
        >
          ✨BeeGeeEss✨
        </a>

        <span
          style={{
            color: isDarkTheme ? "#FFFFFF" : "#0B0D2B",
            margin: "0 8px",
          }}
        >
          | &copy; {currentYear}
        </span>
      </h5>
    </footer>
  );
}

// export default function Footer() {
//   let currentYear = new Date().getFullYear();

//   return (
//     <footer
//       style={{
//         textAlign: "center",
//         width: "100%",
//         padding: "1rem 0",
//       }}
//     >
//       <h5>
//         <a
//           href="https://github.com/BeeGeeEss"
//           rel="noopener noreferrer"
//           target="_blank"
//           style={{
//             color: "#0B0D2B",
//             textDecoration: "none",
//           }}
//         >
//           ✨BeeGeeEss✨
//         </a>

//         <span style={{ color: "#0B0D2B", margin: "0 8px" }}>
//           | &copy; {currentYear}
//         </span>
//       </h5>
//     </footer>
//   );
// }

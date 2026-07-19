import {
  AppBar,
  Toolbar,
  IconButton,
  Drawer,
  Box,
  Button,
  useMediaQuery,
  useTheme,
} from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const [open, setOpen] = useState(false);

  const navItems = [
    { label: "Home", path: "/" },
    { label: "About", path: "/about" },
    { label: "Blog", path: "/blog" },
    { label: "Contact", path: "/contact" },
  ];

  const closeDrawer = () => {
    setOpen(false);
  };

  return (
    <>
      <AppBar
        position="static"
        sx={{
          backgroundColor: "#0B0D2B",
          margin: 0,
          borderRadius: 0,
        }}
      >
        <Toolbar>
          {/* Desktop Navigation */}
          {!isMobile && (
            <Box
              sx={{
                position: "absolute",
                left: "50%",
                transform: "translateX(-50%)",
                display: "flex",
                gap: 1,
              }}
            >
              {navItems.map((item) => (
                <Button
                  key={item.path}
                  component={NavLink}
                  to={item.path}
                  sx={{
                    color: "#B58CFF",
                    textTransform: "none",
                    fontSize: "1rem",

                    "&:hover": {
                      color: "#FFFFFF",
                    },

                    "&.active": {
                      color: "#FFFFFF",
                      fontWeight: "bold",
                    },
                  }}
                >
                  {item.label}
                </Button>
              ))}
            </Box>
          )}

          {/* Mobile Menu Button */}
          {isMobile && (
            <IconButton
              sx={{
                color: "#B58CFF",
              }}
              onClick={() => setOpen(true)}
            >
              <MenuIcon />
            </IconButton>
          )}
        </Toolbar>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer anchor="right" open={open} onClose={closeDrawer}>
        <Box
          sx={{
            width: 250,
            display: "flex",
            flexDirection: "column",
            p: 2,
            gap: 2,
            backgroundColor: "#0B0D2B",
            height: "100%",
          }}
        >
          {navItems.map((item) => (
            <Button
              key={item.path}
              component={NavLink}
              to={item.path}
              onClick={closeDrawer}
              sx={{
                color: "#B58CFF",
                justifyContent: "flex-start",
                textTransform: "none",
                fontSize: "1rem",

                "&:hover": {
                  color: "#FFFFFF",
                },

                "&.active": {
                  color: "#FFFFFF",
                  fontWeight: "bold",
                },
              }}
            >
              {item.label}
            </Button>
          ))}
        </Box>
      </Drawer>
    </>
  );
}

import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "light",

    primary: {
      main: "#8C52FF",
    },

    secondary: {
      main: "#7ED957",
    },

    background: {
      default: "#F9F7FC",
      paper: "#FFFFFF",
    },

    text: {
      primary: "#2D2D2D",
      secondary: "#666666",
    },
  },

  typography: {
    fontFamily: '"Roboto Condensed", sans-serif',

    h1: {
      fontFamily: '"Gotham", "Roboto", sans-serif',
      fontWeight: 700,
    },

    h2: {
      fontFamily: '"Gotham", "Roboto", sans-serif',
      fontWeight: 700,
    },

    h3: {
      fontFamily: '"Gotham", "Roboto", sans-serif',
      fontWeight: 700,
    },

    h4: {
      fontFamily: '"Gotham", "Roboto", sans-serif',
      fontWeight: 700,
    },

    h5: {
      fontFamily: '"Gotham", "Roboto", sans-serif',
      fontWeight: 700,
    },

    h6: {
      fontFamily: '"Gotham", "Roboto", sans-serif',
      fontWeight: 700,
    },

    button: {
      fontFamily: '"Gotham", "Roboto", sans-serif',
      fontWeight: 700,
      textTransform: "none",
    },
  },

  shape: {
    borderRadius: 12,
  },

  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 999,
          padding: "10px 22px",
        },
      },
    },

    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 16,
        },
      },
    },

    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: 16,
        },
      },
    },
  },
});

export default theme;

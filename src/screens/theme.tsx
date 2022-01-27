import { createTheme } from "@mui/material/styles";
import { color } from "../assets/color";

export const theme = createTheme({
  typography: {
    fontFamily: "Questrial",
  },
  palette: {
    background: {
      default: color.dark,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        text: {
          color: color.primary,
          "&:hover": {
            backgroundColor: color.primary + "20",
          },
        },
        contained: {
          backgroundColor: color.primary,
          "&:hover": {
            backgroundColor: color.primary + "90",
          },
        },
        outlined: {
          color: color.primary,
          backgroundColor: color.primary + "10",
          border: "1px solid " + color.primary,
          "&:hover": {
            backgroundColor: color.primary + "20",
            border: "1px solid " + color.primary,
          },
        },
      },
    },
  },
});

export const light = createTheme({
  typography: {
    fontFamily: "Questrial",
  },
  palette: {
    background: {
      default: color.dark,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        text: {
          color: color.primary2,
          "&:hover": {
            backgroundColor: color.primary2 + "20",
          },
        },
        contained: {
          backgroundColor: color.primary2,
          "&:hover": {
            backgroundColor: color.primary2 + "90",
          },
        },
        outlined: {
          color: color.primary2,
          backgroundColor: color.primary2 + "10",
          border: "1px solid " + color.primary2,
          "&:hover": {
            backgroundColor: color.primary2 + "20",
            border: "1px solid " + color.primary2,
          },
        },
      },
    },
  },
});

export const dark = createTheme({
  typography: {
    fontFamily: "Questrial",
  },
  palette: {
    background: {
      default: color.dark,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        text: {
          color: color.primary,
          "&:hover": {
            backgroundColor: color.primary + "20",
          },
        },
        contained: {
          backgroundColor: color.primary,
          "&:hover": {
            backgroundColor: color.primary + "90",
          },
        },
        outlined: {
          color: color.primary,
          backgroundColor: color.primary + "10",
          border: "1px solid " + color.primary,
          "&:hover": {
            backgroundColor: color.primary + "20",
            border: "1px solid " + color.primary,
          },
        },
      },
    },
  },
});

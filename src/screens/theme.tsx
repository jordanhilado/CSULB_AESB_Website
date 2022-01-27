import { createTheme } from "@mui/material/styles";
import { color } from "../assets/color";

export const theme = createTheme({
  typography: {
    fontFamily: "Questrial",
  },
  palette: {
    background: {
      default: color.darkest,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        text: {
          color: color.secondary,
          "&:hover": {
            backgroundColor: color.secondary + "20",
          },
        },
        contained: {
          color: color.darker,
          backgroundColor: color.secondary,
          "&:hover": {
            backgroundColor: color.secondary + "90",
          },
        },
        outlined: {
          color: color.secondary,
          backgroundColor: color.secondary + "10",
          border: "1px solid " + color.secondary,
          "&:hover": {
            backgroundColor: color.secondary + "20",
            border: "1px solid " + color.secondary,
          },
        },
      },
    },
  },
});

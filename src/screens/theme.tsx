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

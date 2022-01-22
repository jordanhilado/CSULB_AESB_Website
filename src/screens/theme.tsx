import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  typography: {
    fontFamily: "Questrial",
  },
  palette: {
    background: {
      default: "#18191A",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        text: {
          color: "#437F97",
        },
        contained: {
          backgroundColor: "#437F97",
          "&:hover": {
            backgroundColor: "rgba(67, 127, 151, 0.8)",
          },
        },
        outlined: {
          color: "#437F97",
          border: "1px solid #437F97",
          "&:hover": {
            border: "1px solid #437F97",
          },
        },
      },
    },
  },
});

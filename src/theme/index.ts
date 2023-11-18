import { createTheme } from "@mui/material";

const CustomTheme = createTheme({
  typography: {
    fontFamily: ['"Comic Neue"', "sans-serif"].join(","),
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          fontWeight: "bold",
        },
      },
    },
  },
});

export default CustomTheme;

import { createTheme } from "@mui/material";
import { indigo } from "@mui/material/colors";

const theme = createTheme({
  palette: {
    primary: {
      dark: indigo[700],
      main: indigo[500],
      light: indigo[300],
    },
  },
  typography: {
    poster: {
      fontSize: "15px",
      color: indigo[500],
      fontWeight: 600,
    },
  },
});

export default theme;

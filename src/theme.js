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
});

export default theme;

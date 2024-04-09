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
      fontSize: "23px",
      color: indigo[500],
      fontWeight: 600,
    },
  },
  components: {
    // Style overrides for MUI TableHead
    MuiTableCell: {
      styleOverrides: {
        head: {
          // Targeting the table header cells
          color: "white", // Set your desired color
          backgroundColor: indigo[500], // Example background color
        },
      },
    },
  },
});

export default theme;

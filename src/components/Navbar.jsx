import { AppBar, Box, Button, IconButton, Toolbar } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { indigo } from "@mui/material/colors";
import { useContext } from "react";
import { CardDataContext } from "../context/CardDataContext";
import { Timer } from "./Timer";
import { MoveCounter } from "./MoveCounter";

const Navbar = () => {
  const { handleNewGame, gameStarted, gameCompleted } =
    useContext(CardDataContext);

  return (
    <AppBar position="static" sx={{ bgcolor: indigo[500] }}>
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <Box id="navbar-left-side">
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Button color="inherit" sx={{ mx: 1 }} onClick={handleNewGame}>
            New Game
          </Button>
        </Box>

        <Box id="navbar-right-side" display="flex" gap={2}>
          {gameStarted && !gameCompleted && (
            <>
              <Timer />
              <MoveCounter />
            </>
          )}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export { Navbar };

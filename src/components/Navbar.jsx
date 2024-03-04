import { AppBar, Button, IconButton, Toolbar } from "@mui/material";
import React, { useContext } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import { indigo } from "@mui/material/colors";
import { CardDataContext } from "../context/CardDataContext";

const Navbar = () => {
  const { handleNewGame } = useContext(CardDataContext);

  return (
    <AppBar position="static" sx={{ bgcolor: indigo[500] }}>
      <Toolbar>
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
      </Toolbar>
    </AppBar>
  );
};

export { Navbar };

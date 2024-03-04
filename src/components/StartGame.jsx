import { Box, Button } from "@mui/material";
import React, { useContext } from "react";
import { CardDataContext } from "../context/CardDataContext";

const StartGame = () => {
  const { handleStartGame } = useContext(CardDataContext);

  return (
    <Box id="start-game-container">
      <Button
        variant="contained"
        sx={{
          color: "black",
          bgcolor: "white",
          "&:hover": { bgcolor: "lightgray" },
        }}
        onClick={handleStartGame}
      >
        START THE GAME
      </Button>
    </Box>
  );
};

export { StartGame };

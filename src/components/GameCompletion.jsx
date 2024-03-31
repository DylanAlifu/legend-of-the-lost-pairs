import { Box, Button, Typography } from "@mui/material";
import RestartAltIcon from "@mui/icons-material/RestartAlt";
import { CardDataContext } from "../context/CardDataContext";
import React, { useContext } from "react";

const GameCompletion = () => {
  const { handleStartGame, diffSeconds, diffMinutes, diffHours, moves } =
    useContext(CardDataContext);

  const time = `${diffHours} h ${diffMinutes} m ${diffSeconds} s`;

  return (
    <Box display="flex" flexDirection="column" alignItems="center" gap={2}>
      <Typography variant="h3">🎉</Typography>
      <Typography>Well done!</Typography>
      <Box>
        <Typography>Time: {time}</Typography>
        <Typography>Moves: {moves}</Typography>
      </Box>

      <Button
        variant="contained"
        endIcon={<RestartAltIcon />}
        onClick={handleStartGame}
      >
        Play Again
      </Button>
    </Box>
  );
};

export { GameCompletion };

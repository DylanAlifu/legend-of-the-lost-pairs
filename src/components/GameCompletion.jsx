import { Box, Button, Typography } from "@mui/material";
import RestartAltIcon from "@mui/icons-material/RestartAlt";
import { CardDataContext } from "../context/CardDataContext";
import React, { useContext } from "react";

const GameCompletion = () => {
  const {
    handleStartGame,
    diffSeconds,
    diffMinutes,
    diffHours,
    moves,
    penaltyTime,
  } = useContext(CardDataContext);

  const totalSecondsWithPenalty = diffSeconds + penaltyTime;
  const seconds =
    totalSecondsWithPenalty >= 60
      ? totalSecondsWithPenalty % 60
      : totalSecondsWithPenalty;

  const totalMinutesWithPenalty =
    totalSecondsWithPenalty >= 60 ? diffMinutes + 1 : diffMinutes;
  const minutes =
    totalMinutesWithPenalty >= 60
      ? totalMinutesWithPenalty + 1
      : totalMinutesWithPenalty;

  const hours = totalMinutesWithPenalty >= 60 ? diffHours + 1 : diffHours;

  const time = `${hours} h ${minutes} m ${seconds} s`;

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

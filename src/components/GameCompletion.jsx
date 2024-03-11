import { Box, Button, Typography } from "@mui/material";
import { indigo } from "@mui/material/colors";
import RestartAltIcon from "@mui/icons-material/RestartAlt";
import { CardDataContext } from "../context/CardDataContext";
import React, { useContext } from "react";

const GameCompletion = () => {
  const { handleStartGame, diffSeconds, diffMinutes, diffHours } =
    useContext(CardDataContext);

  const time = `${diffHours} h ${diffMinutes} m ${diffSeconds} s`;

  return (
    <Box display="flex" flexDirection="column" alignItems="center" gap={2}>
      <Typography variant="h3">🎉</Typography>
      <Typography>Well done!</Typography>
      <Box>
        <Typography>Time: {time}</Typography>
        {/* <Typography>Moves: 14</Typography> */}
      </Box>

      <Button
        variant="contained"
        sx={{
          color: "white",
          bgcolor: indigo[500],
          "&:hover": { bgcolor: indigo[900] },
        }}
        endIcon={<RestartAltIcon />}
        onClick={handleStartGame}
      >
        Play again
      </Button>
    </Box>
  );
};

export { GameCompletion };

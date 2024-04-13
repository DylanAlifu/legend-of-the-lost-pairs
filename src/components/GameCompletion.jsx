import { Box, Button, Typography } from "@mui/material";
import RestartAltIcon from "@mui/icons-material/RestartAlt";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import { CardDataContext } from "../context/CardDataContext";
import React, { useContext, useMemo } from "react";
import { LeaderBoard } from "./LeaderBoard";

const GameCompletion = () => {
  const {
    handleStartGame,
    handleNewGame,
    moves,
    level,
    fourLeaderBoard,
    sixLeaderBoard,
    eightLeaderBoard,
    timeTakenDisplayValue,
  } = useContext(CardDataContext);

  const leaderBoardData = useMemo(() => {
    let leaderBoard;
    let stringLevel;
    switch (level.numberOfCards) {
      case 16:
        leaderBoard = fourLeaderBoard;
        stringLevel = "4x4";
        break;
      case 36:
        leaderBoard = sixLeaderBoard;
        stringLevel = "6x6";
        break;
      case 64:
        leaderBoard = eightLeaderBoard;
        stringLevel = "8x8";
        break;
      default:
        break;
    }
    return { level: stringLevel, data: leaderBoard };
  }, [eightLeaderBoard, fourLeaderBoard, level.numberOfCards, sixLeaderBoard]);

  return (
    <Box display="flex" flexDirection="column" gap={5}>
      <Box display="flex" flexDirection="column" alignItems="center" gap={2}>
        <Typography variant="h3">🎉</Typography>
        <Typography>Well done!</Typography>
        <Box>
          <Typography>Time: {timeTakenDisplayValue}</Typography>
          <Typography>Moves: {moves}</Typography>
        </Box>

        <Box display="flex" gap={2}>
          <Button
            variant="contained"
            endIcon={<SportsEsportsIcon />}
            onClick={handleNewGame}
          >
            New Game
          </Button>

          <Button
            variant="contained"
            endIcon={<RestartAltIcon />}
            onClick={handleStartGame}
          >
            Play Again
          </Button>
        </Box>
      </Box>
      <LeaderBoard level={leaderBoardData.level} data={leaderBoardData.data} />
    </Box>
  );
};

export { GameCompletion };

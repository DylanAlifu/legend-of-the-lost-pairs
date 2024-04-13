import { Box } from "@mui/material";
import React, { useContext } from "react";
import { LeaderBoard } from "../../components/LeaderBoard";
import { CardDataContext } from "../../context/CardDataContext";

const LeaderboardPage = () => {
  const { fourLeaderBoard, sixLeaderBoard, eightLeaderBoard } =
    useContext(CardDataContext);

  return (
    <Box display="flex" gap={5}>
      <LeaderBoard level="4x4" data={fourLeaderBoard} />
      <LeaderBoard level="6x6" data={sixLeaderBoard} />
      <LeaderBoard level="8x8" data={eightLeaderBoard} />
    </Box>
  );
};

export { LeaderboardPage };

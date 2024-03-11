import { useContext } from "react";
import { CardGrid } from "./components/CardGrid";
import { Navbar } from "./components/Navbar";
import { CardDataContext } from "./context/CardDataContext";
import { StartGame } from "./components/StartGame";
import { Box } from "@mui/material";
import { GameCompletion } from "./components/GameCompletion";

function App() {
  const { gameStarted, gameCompleted } = useContext(CardDataContext);

  return (
    <>
      <Navbar />
      <Box id="main-container" display="flex" justifyContent="center" mt={5}>
        {gameStarted && <CardGrid />}
        {gameCompleted && <GameCompletion />}
        {!gameStarted && !gameCompleted && <StartGame />}
      </Box>
    </>
  );
}

export default App;

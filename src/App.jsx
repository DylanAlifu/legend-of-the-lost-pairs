import { useContext } from "react";
import { CardGrid } from "./components/CardGrid";
import { Navbar } from "./components/Navbar";
import { CardDataContext } from "./context/CardDataContext";
import { StartGame } from "./components/StartGame";
import { Box } from "@mui/material";
import { GameCompletion } from "./components/GameCompletion";
import { WelcomeModal } from "./components/WelcomeModal";
import { Route, Routes } from "react-router-dom";
import { LeaderboardPage } from "./pages/Leaderboard";
import { SoundControls } from "./components/SoundControls";

function App() {
  const { gameStarted, gameCompleted } = useContext(CardDataContext);

  return (
    <>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route
            index
            element={
              <>
                {gameStarted && <CardGrid />}
                {gameCompleted && <GameCompletion />}
                {!gameStarted && !gameCompleted && <StartGame />}

                <WelcomeModal />
              </>
            }
          />
          <Route path="leaderboard" element={<LeaderboardPage />} />

          <Route path="*" element={<Box>404 NOT FOUND</Box>} />
        </Route>
      </Routes>

      <SoundControls />
    </>
  );
}

export default App;

import { useContext } from "react";
import { CardGrid } from "./components/CardGrid";
import { Navbar } from "./components/Navbar";
import { CardDataContext } from "./context/CardDataContext";
import { StartGame } from "./components/StartGame";
import { Box } from "@mui/material";

function App() {
  const { gameStarted } = useContext(CardDataContext);

  return (
    <>
      <Navbar />
      <Box id="main-container" display="flex" justifyContent="center" mt={5}>
        {gameStarted ? <CardGrid /> : <StartGame />}
      </Box>
    </>
  );
}

export default App;

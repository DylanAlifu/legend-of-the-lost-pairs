import { Backdrop, Box, Button, Typography } from "@mui/material";
import React, { useContext, useState } from "react";
import { CardDataContext } from "../context/CardDataContext";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";

const AreYouSureModal = () => {
  const { handleNewGame } = useContext(CardDataContext);
  const [modalOpen, setModalOpen] = useState(false);

  const toggleModel = () => {
    setModalOpen((prev) => !prev);
  };

  return (
    <>
      <Button
        variant="outlined"
        startIcon={<SportsEsportsIcon />}
        onClick={toggleModel}
      >
        New Game
      </Button>

      <Backdrop
        sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={modalOpen}
      >
        <Box
          sx={{
            backgroundColor: "white",
            borderRadius: "5px",
            p: 2,
            display: "flex",
            flexDirection: "column",
            gap: 2,
          }}
        >
          <Box display="flex" flexDirection="column">
            <Typography variant="h6">Are you sure? 🤔</Typography>
            <Typography mb={3}>Your game progress will be lost!</Typography>
          </Box>

          <Box display="flex" justifyContent={"space-around"}>
            <Button variant="contained" color="error" onClick={handleNewGame}>
              I'm sure
            </Button>
            <Button variant="outlined" onClick={toggleModel}>
              Cancel
            </Button>
          </Box>
        </Box>
      </Backdrop>
    </>
  );
};

export { AreYouSureModal };

import React, { useContext, useState } from "react";
import TipsAndUpdatesIcon from "@mui/icons-material/TipsAndUpdates";
import Snackbar from "@mui/material/Snackbar";
import { Alert, Button } from "@mui/material";
import { CardDataContext } from "../context/CardDataContext";
import { SoundContext } from "../context/SoundContext";

const Hint = () => {
  const { handleHintClick, maxNumberOfHints, cardDataUpdating } =
    useContext(CardDataContext);
  const { playHintSound } = useContext(SoundContext);

  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [hints, setHints] = useState(maxNumberOfHints);
  const onHintClick = () => {
    playHintSound();
    setOpenSnackbar(true);
    setHints((prev) => prev - 1);
    handleHintClick();
  };

  return (
    <>
      <Button
        variant="outlined"
        color="primary"
        startIcon={<TipsAndUpdatesIcon />}
        onClick={onHintClick}
        disabled={hints === 0 || cardDataUpdating}
      >
        Hint ({`${hints} left`})
      </Button>

      <Snackbar
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        autoHideDuration={1500}
        open={openSnackbar}
        onClose={() => setOpenSnackbar(false)}
      >
        <Alert
          onClose={() => setOpenSnackbar(false)}
          severity="error"
          variant="filled"
          sx={{ width: "100%" }}
        >
          3 seconds added to penalty time.
        </Alert>
      </Snackbar>
    </>
  );
};

export { Hint };

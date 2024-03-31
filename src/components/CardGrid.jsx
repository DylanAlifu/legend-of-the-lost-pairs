import { Alert, Box, Button } from "@mui/material";
import { Card } from "./Card";
import { useContext, useState } from "react";
import { CardDataContext } from "../context/CardDataContext";
import TipsAndUpdatesIcon from "@mui/icons-material/TipsAndUpdates";
import Snackbar from "@mui/material/Snackbar";

const CardGrid = () => {
  const { numberOfCards, cardData, handleHintClick, maxNumberOfHints } =
    useContext(CardDataContext);

  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [hints, setHints] = useState(maxNumberOfHints);
  const onHintClick = () => {
    setOpenSnackbar(true);
    setHints((prev) => prev - 1);
    handleHintClick();
  };

  const columns = Math.sqrt(numberOfCards);
  const gridContainerWidth = columns * 100 + (columns - 1) * 8;

  return (
    <Box display="flex" flexDirection="column" gap={2}>
      <Button
        variant="outlined"
        color="primary"
        startIcon={<TipsAndUpdatesIcon />}
        onClick={onHintClick}
        disabled={hints <= 0}
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

      <Box
        id="card-container"
        sx={{
          display: "grid",
          gridTemplateColumns: `repeat(${columns}, 1fr);`,
          justifyItems: "center",
          gap: 1,
          width: gridContainerWidth,
        }}
      >
        {cardData.map((cardDataItem) => {
          return <Card key={cardDataItem.id} data={cardDataItem} />;
        })}
      </Box>
    </Box>
  );
};

export { CardGrid };

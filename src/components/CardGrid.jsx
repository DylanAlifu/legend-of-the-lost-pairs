import { Box } from "@mui/material";
import { Card } from "./Card";
import { useContext } from "react";
import { CardDataContext } from "../context/CardDataContext";

const CardGrid = () => {
  const { numberOfCards, cardData } = useContext(CardDataContext);

  const columns = Math.sqrt(numberOfCards);
  const gridContainerWidth = columns * 100 + (columns - 1) * 8;

  return (
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
  );
};

export { CardGrid };

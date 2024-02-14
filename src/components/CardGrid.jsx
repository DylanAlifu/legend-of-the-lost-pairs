import { Box } from "@mui/material";
import Card from "./Card";
import { useContext } from "react";
import { CardDataContext } from "../context/CardDataContext";

const CardGrid = () => {
  const { numberOfCards, cardData } = useContext(CardDataContext);

  const columns = Math.sqrt(numberOfCards);
  const gridContainerWidth = columns * 100 + (columns - 1) * 8;

  return (
    <Box display="flex" justifyContent="center" mt={5}>
      <Box
        id="card-container"
        sx={{
          display: "grid",
          gridTemplateColumns: `repeat(${columns}, 1fr)`,
          gap: 1,
          justifyItems: "center",
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

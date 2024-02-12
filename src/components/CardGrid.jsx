import { Box } from "@mui/material";
import Card from "./Card";

const CardGrid = () => {
  const numberOfCards = 36;

  const generateCards = (numberOfCards) => {
    const arr = new Array(numberOfCards);
    arr.fill(0);

    return arr.map((v, index) => <Card key={index} />);
  };

  const cards = generateCards(numberOfCards);
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
        {cards}
      </Box>
    </Box>
  );
};

export { CardGrid };
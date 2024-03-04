import { Box } from "@mui/material";
import { indigo } from "@mui/material/colors";
import React, { useContext } from "react";
import { CardDataContext } from "../context/CardDataContext";

const Card = ({ data }) => {
  const { id, imageUrl, isFlipped, isMatched } = data;
  const { handleCardClick } = useContext(CardDataContext);

  return (
    <>
      {isMatched ? (
        <Box height={100} width={100}></Box>
      ) : (
        <Box
          height={100}
          width={100}
          sx={{
            backgroundImage: isFlipped
              ? "none"
              : `url(${"/assets/bgPhoto/logo.png"})`,
            bgcolor: isFlipped ? "none" : "rgba(0, 0, 0, 0.2)",
            backgroundSize: "90%",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            borderRadius: "3%",
            "&:hover": {
              bgcolor: isFlipped ? "none" : indigo[100],
            },
          }}
          onClick={() => handleCardClick(data)}
        >
          {isFlipped ? (
            <img src={imageUrl} alt={`card-${id}`} height="100%" />
          ) : null}
        </Box>
      )}
    </>
  );
};

export { Card };

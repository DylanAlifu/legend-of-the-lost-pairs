import { Box } from "@mui/material";
import { orange } from "@mui/material/colors";
import React from "react";

const Card = () => {
  return (
    <Box
      height={100}
      width={100}
      bgcolor={"white"}
      sx={{
        "&:hover": {
          bgcolor: orange[50],
        },
      }}
    >
      <img src={"/assets/9.webp"} alt={"card-1"} loading="lazy" height="100%" />
    </Box>
  );
};

export default Card;

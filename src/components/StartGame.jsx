import {
  Box,
  Button,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  Typography,
} from "@mui/material";
import React, { useContext } from "react";
import { CardDataContext } from "../context/CardDataContext";
import { indigo } from "@mui/material/colors";
import { Levels, Speeds } from "../constants";

const StartGame = () => {
  const {
    handleStartGame,
    level,
    speed,
    handleLevelChange: setLevel,
    setSpeed,
    userName,
    updateUserName,
  } = useContext(CardDataContext);

  return (
    <Box
      id="start-game-container"
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 2,
      }}
    >
      <Box id="level-container">
        {userName && (
          <Box mb={5}>
            <Typography
              variant="h6"
              sx={{ color: indigo[700], fontStyle: "strong" }}
            >{`Are you ready, ${userName}`}</Typography>
            <Box display="flex" alignItems="center" gap={1}>
              <Typography sx={{ color: indigo[700], fontStyle: "strong" }}>
                Not you? 🤔
              </Typography>
              <Button
                size="small"
                sx={{ fontWeight: "bold", paddingTop: "6px" }}
                onClick={() => updateUserName("")}
                variant="outlined"
              >
                Switch User
              </Button>
            </Box>
          </Box>
        )}
        <FormLabel
          id="levels-buttons-group-label"
          sx={{ color: indigo[700], fontStyle: "strong" }}
        >
          Game Level
        </FormLabel>
        <RadioGroup
          row
          aria-labelledby="level-buttons-group-label"
          name="levels-buttons-group"
          sx={{ color: indigo[700] }}
          value={level}
        >
          <FormControlLabel
            value={Levels["4x4"]}
            control={
              <Radio sx={radioStyle} onClick={() => setLevel(Levels["4x4"])} />
            }
            label="4x4"
          />
          <FormControlLabel
            value={Levels["6x6"]}
            control={
              <Radio sx={radioStyle} onClick={() => setLevel(Levels["6x6"])} />
            }
            label="6x6"
          />
          <FormControlLabel
            value={Levels["8x8"]}
            control={
              <Radio sx={radioStyle} onClick={() => setLevel(Levels["8x8"])} />
            }
            label="8x8"
          />
        </RadioGroup>
      </Box>

      <Box id="speed-container">
        <FormLabel
          id="speed-buttons-group-label"
          sx={{ color: indigo[700], fontStyle: "strong" }}
        >
          Game Speed
        </FormLabel>
        <RadioGroup
          row
          aria-labelledby="speed-buttons-group-label"
          name="speed-buttons-group"
          sx={{ color: indigo[700] }}
          value={speed}
        >
          <FormControlLabel
            value={Speeds.slow}
            control={
              <Radio sx={radioStyle} onClick={() => setSpeed(Speeds.slow)} />
            }
            label="Slow"
          />
          <FormControlLabel
            value={Speeds.medium}
            control={
              <Radio sx={radioStyle} onClick={() => setSpeed(Speeds.medium)} />
            }
            label="Medium"
          />
          <FormControlLabel
            value={Speeds.fast}
            control={
              <Radio sx={radioStyle} onClick={() => setSpeed(Speeds.fast)} />
            }
            label="Fast"
          />
        </RadioGroup>
      </Box>

      <Button variant="contained" onClick={handleStartGame}>
        START THE GAME
      </Button>
    </Box>
  );
};

export { StartGame };

const radioStyle = {
  color: indigo[900],
  "&.Mui-checked": {
    color: indigo[900],
  },
};

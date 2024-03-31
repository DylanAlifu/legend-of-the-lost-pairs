import { Backdrop, Box, Button, TextField, Typography } from "@mui/material";
import React, { useContext, useState } from "react";
import { CardDataContext } from "../context/CardDataContext";
import { SoundContext } from "../context/SoundContext";

const WelcomeModal = () => {
  const { userName, updateUserName } = useContext(CardDataContext);
  const { playBackgroundMusic } = useContext(SoundContext);

  const [usernameInputValue, setUsernameInputValue] = useState("");
  const [hasError, setHasError] = useState(false);

  const handleUsernameUpdate = () => {
    const currentUsernameValue = usernameInputValue.trim();
    if (currentUsernameValue) {
      updateUserName(currentUsernameValue);
      playBackgroundMusic();
      setUsernameInputValue("");
    } else {
      setHasError(true);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleUsernameUpdate();
    }
  };

  return (
    <Backdrop
      sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
      open={!userName}
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
        <Typography variant="h6">Hi there! 👋</Typography>
        <Box>
          <Typography>
            Welcome to the
            <Typography variant="poster">
              🃏 Legend of the lost PAIRs 🃏
            </Typography>
          </Typography>

          <Typography>Enter your name to start.</Typography>
        </Box>

        <TextField
          id="username-input"
          label="Your Name / Nickname"
          variant="standard"
          value={usernameInputValue}
          autoComplete="off"
          onChange={(e) => {
            if (hasError) setHasError(false);
            setUsernameInputValue(e.target.value);
          }}
          onKeyDown={handleKeyDown}
          error={hasError}
        />
        <Button variant="contained" onClick={handleUsernameUpdate}>
          Let's Go
        </Button>
      </Box>
    </Backdrop>
  );
};

export { WelcomeModal };

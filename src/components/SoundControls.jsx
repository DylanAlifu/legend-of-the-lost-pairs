import { Box, IconButton, Popover, Slider } from "@mui/material";
import React, { useContext, useState } from "react";
import VolumeUpIcon from "@mui/icons-material/VolumeUp";
import { cyan } from "@mui/material/colors";
import VolumeOffIcon from "@mui/icons-material/VolumeOff";
import VolumeDownIcon from "@mui/icons-material/VolumeDown";
import { SoundContext } from "../context/SoundContext";

const SoundControls = () => {
  const { volumeUp, volumeDown, toggleMute, volume, mute, updateVolume } =
    useContext(SoundContext);

  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "sound-control-popover" : undefined;

  const handleVolumeChange = (_event, newVolume) => {
    updateVolume(newVolume);
  };

  return (
    <Box
      id="sound-control-container"
      position="fixed"
      left="0"
      bottom="0"
      p={2}
    >
      <IconButton
        sx={{ color: cyan[50] }}
        aria-label="sound-control-mute"
        onClick={handleClick}
      >
        <VolumeUpIcon sx={{ fontSize: 32 }} />
      </IconButton>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          width={"240px"}
        >
          <IconButton
            //   sx={{ color: cyan[50] }}
            aria-label="sound-control-mute"
            onClick={volumeDown}
          >
            <VolumeDownIcon />
          </IconButton>
          <Slider
            aria-label="Volume"
            min={0.0}
            max={1.0}
            step={0.1}
            value={volume}
            onChange={handleVolumeChange}
            defaultValue={volume}
          />

          <IconButton
            //   sx={{ color: cyan[50] }}
            aria-label="sound-control-mute"
            onClick={volumeUp}
          >
            <VolumeUpIcon />
          </IconButton>
          <IconButton
            //   sx={{ color: cyan[50] }}
            aria-label="sound-control-mute"
            color={mute ? "error" : undefined}
            onClick={() => toggleMute(!mute)}
          >
            <VolumeOffIcon />
          </IconButton>
        </Box>
      </Popover>
    </Box>
  );
};

export { SoundControls };

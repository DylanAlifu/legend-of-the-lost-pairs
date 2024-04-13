import { AppBar, Box, Button, Toolbar } from "@mui/material";
import { indigo } from "@mui/material/colors";
import { useContext } from "react";
import { CardDataContext } from "../context/CardDataContext";
import { Timer } from "./Timer";
import { MoveCounter } from "./MoveCounter";
import { Link, Outlet } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import LeaderboardIcon from "@mui/icons-material/Leaderboard";

const Navbar = () => {
  const { gameStarted, gameCompleted } = useContext(CardDataContext);

  return (
    <>
      <AppBar position="static" sx={{ bgcolor: indigo[500] }}>
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <Box display="flex" id="navbar-left-side" gap={3}>
            <img
              src="/assets/bgPhoto/pics.png"
              alt="logo"
              style={{ height: "50px" }}
            />
            <Button
              component={Link}
              to="/"
              color="inherit"
              startIcon={<HomeIcon />}
            >
              HOME
            </Button>

            <Button
              component={Link}
              to="/leaderboard"
              color="inherit"
              startIcon={<LeaderboardIcon />}
            >
              LEADERBOARD
            </Button>
          </Box>

          <Box id="navbar-right-side" display="flex" gap={2}>
            {gameStarted && !gameCompleted && (
              <>
                <Timer />
                <MoveCounter />
              </>
            )}
          </Box>
        </Toolbar>
      </AppBar>

      <Box id="main-container" display="flex" justifyContent="center" mt={5}>
        <Outlet />
      </Box>
    </>
  );
};

export { Navbar };

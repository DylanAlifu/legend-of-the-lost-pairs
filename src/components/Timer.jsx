import { useContext, useEffect } from "react";
import { CardDataContext } from "../context/CardDataContext";
import AccessAlarmIcon from "@mui/icons-material/AccessAlarm";
import { differenceInMinutes, differenceInHours } from "date-fns";
import { Box, Typography } from "@mui/material";

const Timer = () => {
  const {
    startedTimeStamp,
    diffSeconds,
    setDiffSeconds,
    diffMinutes,
    setDiffMinutes,
    diffHours,
    setDiffHours,
  } = useContext(CardDataContext);

  useEffect(() => {
    /*
    setInterval = would run the entire block {} every 1000 millisecond 
    */
    if (startedTimeStamp) {
      const interval = setInterval(() => {
        const currentTimeStamp = new Date();

        const currDiffMinutes =
          differenceInMinutes(currentTimeStamp, startedTimeStamp) % 60;
        const currDiffHours = differenceInHours(
          currentTimeStamp,
          startedTimeStamp
        );

        if (currDiffHours !== diffHours) {
          setDiffHours(currDiffHours);
        }
        if (currDiffMinutes !== diffMinutes) {
          setDiffMinutes(currDiffMinutes);
        }
        setDiffSeconds((prev) => {
          if (prev === 59) {
            return 0;
          } else {
            return prev + 1;
          }
        });
      }, 1000);
      return () => {
        clearInterval(interval);
      };
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [startedTimeStamp]);

  const getTimerDisplayValue = () => {
    let displayValue = `${diffSeconds} s`;

    if (diffMinutes > 0) {
      displayValue = `${diffMinutes} m ${diffSeconds} s`;
    }

    if (diffHours > 0) {
      displayValue = `${diffHours} h ${diffMinutes} m ${diffSeconds} s`;
    }

    return displayValue;
  };
  return (
    startedTimeStamp && (
      <Box display="flex" alignItems="center" gap={1}>
        <AccessAlarmIcon />
        <Typography>{getTimerDisplayValue()}</Typography>
      </Box>
    )
  );
};

export { Timer };

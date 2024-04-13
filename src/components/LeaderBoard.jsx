import React, { useMemo } from "react";
import {
  Box,
  Paper,
  Typography,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from "@mui/material";
import { indigo } from "@mui/material/colors";

const LeaderBoard = ({ level, data }) => {
  const sortedRows = useMemo(() => {
    if (data && data.length > 0) {
      return data.sort((a, b) => a.time - b.time).slice(0, 10);
    } else {
      return [];
    }
  }, [data]);

  return (
    <Box id="leader-board">
      <Typography
        variant="h6"
        textAlign="center"
        mb={1}
        sx={{ color: indigo[700] }}
      >
        {level} Leader Board
      </Typography>

      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 300 }}>
          <TableHead sx={{ bgcolor: "primary.main" }}>
            <TableRow>
              <TableCell>Ranking</TableCell>
              <TableCell>Name</TableCell>
              <TableCell align="right">Time</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {sortedRows.length === 0 ? (
              <TableRow>
                <TableCell colSpan={3} align="center">
                  No records found
                </TableCell>
              </TableRow>
            ) : (
              sortedRows.map((row, index) => (
                <TableRow
                  key={row.name}
                  sx={{
                    "&:last-child td, &:last-child th": { border: 0 },
                    "&:hover": { bgcolor: indigo[100] },
                  }}
                >
                  <TableCell component="th" scope="row">
                    {index + 1}
                  </TableCell>
                  <TableCell>{row.name}</TableCell>
                  <TableCell align="right">{row.time}</TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export { LeaderBoard };

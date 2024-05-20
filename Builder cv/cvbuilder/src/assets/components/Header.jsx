import React from "react";
import { useState } from "react";
import Box from "@mui/material/Box";
import LinearProgress from "@mui/material/LinearProgress";
import Typography from "@mui/material/Typography";

function Header({ progress }) {
  return (
    <div>
      <div>
        <Box sx={{ width: "100%", display: "flex", alignItems: "center" }}>
          <Box sx={{ width: "100%", mr: 1 }}>
            <LinearProgress variant="determinate" value={progress} />
          </Box>
          <Box sx={{ minWidth: 30 }}>
            <Typography variant="body2" color="textSecondary">
              {progress}%
            </Typography>
          </Box>
        </Box>
      </div>
    </div>
  );
}

export default Header;

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
          <Box sx={{ width: "100%", mr: 1, backgroundColor: "white" }}>
            <LinearProgress
              variant="determinate"
              value={progress}
              sx={{
                height: 10,
                borderRadius: 5,
                backgroundColor: "#fff",
                "& .MuiLinearProgress-bar": {
                  backgroundColor: "#0066FF",
                },
              }}
            />
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

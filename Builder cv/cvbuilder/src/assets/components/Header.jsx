import React from "react";
import { useState } from "react";
import Box from "@mui/material/Box";
import LinearProgress from "@mui/material/LinearProgress";
import Typography from "@mui/material/Typography";

function Header(props) {
  const [progress, setProgress] = useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress === 100) {
          return 0;
        }
        const diff = Math.random() * 10;
        return Math.min(oldProgress + diff, 100);
      });
    }, 500);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div>
      <div>
        <Box sx={{ width: "100%", display: "flex", alignItems: "center" }}>
          <Box sx={{ width: "100%", mr: 1 }}>
            <LinearProgress variant="determinate" value={progress} />
          </Box>
          <Box sx={{ minWidth: 30 }}>
            <Typography variant="body2" color="textSecondary">{`${Math.round(
              32
            )}%`}</Typography>
          </Box>
        </Box>
      </div>
    </div>
  );
}

export default Header;

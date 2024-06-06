import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";

function Leading_card(props) {
  return (
    <Box sx={{ backgroundColor: "#F9FAFB", marginTop: 12 }}>
      <div style={{ marginTop: 40, padding: 60 }}>
        <Typography
          sx={{
            color: "#000000",
            fontWeight: "bold",
            fontFamily: "Inter, sans-serif",
            fontSize: 24,
            textAlign: "center",
          }}
        >
          Make a resume in 3 simple steps
        </Typography>
        <div
          style={{
            marginTop: 40,
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Box
            component="span"
            sx={{
              display: "inline-block",
              mx: "2px",
              transform: "scale(0.8)",
              backgroundColor: "white",
              boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
              padding: 4,
              borderRadius: 4,
              width: 265,
            }}
          >
            <CardContent sx={{ padding: 2 }}>
              <Typography
                variant="h3"
                component="div"
                sx={{ fontFamily: "Inter, sans-serif", fontWeight: "bold" }}
              >
                1
              </Typography>
              <Typography
                sx={{
                  mb: 1.5,
                  fontFamily: "Inter, sans-serif",
                  color: "black",
                }}
              >
                Step
              </Typography>
              <Typography
                sx={{
                  fontFamily: "Inter, sans-serif",
                  fontWeight: "bold",
                  color: "#101928",
                  fontSize: 24,
                }}
              >
                Enter Your <br></br>Information
                {""}
              </Typography>
            </CardContent>
            <CardActions></CardActions>
          </Box>
          <Box
            component="span"
            sx={{
              display: "inline-block",
              mx: "2px",
              transform: "scale(0.8)",
              backgroundColor: "white",
              boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
              padding: 4,
              borderRadius: 4,
              width: 265,
            }}
          >
            <CardContent sx={{ padding: 2 }}>
              <Typography
                variant="h3"
                component="div"
                sx={{ fontFamily: "Inter, sans-serif", fontWeight: "bold" }}
              >
                2
              </Typography>
              <Typography
                sx={{
                  mb: 1.5,
                  fontFamily: "Inter, sans-serif",
                  color: "black",
                }}
              >
                Step
              </Typography>
              <Typography
                sx={{
                  fontFamily: "Inter, sans-serif",
                  fontWeight: "bold",
                  color: "#101928",
                  fontSize: 24,
                }}
              >
                Let Cvease Do the Work for you!
                {""}
              </Typography>
            </CardContent>
            <CardActions></CardActions>
          </Box>

          <Box
            component="span"
            sx={{
              display: "inline-block",
              mx: "2px",
              transform: "scale(0.8)",
              backgroundColor: "white",
              boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
              padding: 4,
              borderRadius: 4,
              width: 265,
            }}
          >
            <CardContent>
              <Typography
                variant="h3"
                component="div"
                sx={{ fontFamily: "Inter, sans-serif", fontWeight: "bold" }}
              >
                3
              </Typography>
              <Typography
                sx={{
                  mb: 1.5,
                  fontFamily: "Inter, sans-serif",
                  color: "black",
                }}
              >
                Step
              </Typography>
              <Typography
                sx={{
                  fontFamily: "Inter, sans-serif",
                  fontWeight: "bold",
                  color: "#101928",
                  fontSize: 24,
                }}
              >
                Download <br></br>and Use
                {""}
              </Typography>
            </CardContent>
            <CardActions></CardActions>
          </Box>
        </div>
      </div>
    </Box>
  );
}

export default Leading_card;

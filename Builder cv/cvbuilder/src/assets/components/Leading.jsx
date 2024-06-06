import React from "react";
import Container from "@mui/material/Container";
import Hero from "./Hero";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Leading_card from "./Leading_card";
import { Outlet, Link } from "react-router-dom";

function Leading(props) {
  return (
    <div>
      <Container maxWidth="md">
        <Box
          sx={{
            p: 2,
            marginLeft: 0,
            display: "flex",
            alignContent: "center",
            justifyContent: "space-between",
          }}
        >
          <Hero />
          <div>
            <Button
              sx={{
                color: "white",
              }}
            >
              <Link to={`/sign`}>Sign in!</Link>
            </Button>
          </div>
        </Box>

        <Box
          sx={{
            p: 2,
            textAlign: "center",
            display: "block",
            marginTop: 4,
          }}
        >
          <Typography
            variant="h3"
            gutterBottom
            sx={{
              fontWeight: "900",
              color: "black",
              fontFamily: "Inter, sans-serif",
            }}
          >
            Craft Your Perfect Resume with Cvease!{" "}
          </Typography>
          <Typography
            variant="body1"
            gutterBottom
            sx={{
              color: "#475367",
              fontWeight: "600",
              fontFamily: "Inter, sans-serif",
            }}
          >
            {" "}
            Stand Out from the Crowd with a Professionally <br></br> Crafted
            Resume from Cvease
          </Typography>
          <div style={{ marginTop: 20 }}>
            <Button
              sx={{
                color: "white",
                backgroundColor: "#1671D9",
                paddingLeft: 2,
                paddingRight: 2,
                "&:hover": {
                  backgroundColor: "#80BBFF", // Hover color of the button
                  color: "#1D2739", // Hover text color of the button (if needed)
                },
              }}
            >
              <Link
                style={{
                  textDecoration: "none", // Remove underline from link
                  color: "white", // Change this to your preferred text color
                  fontFamily: "inherit", // Inherit font family from button
                }}
                to={`/cv`}
              >
                {" "}
                Create it Now! !
              </Link>
            </Button>
          </div>
        </Box>
      </Container>
      <Leading_card />
    </div>
  );
}

export default Leading;

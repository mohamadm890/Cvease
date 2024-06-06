import React from "react";
import Hero from "./Hero";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";

function Dashbroad(props) {
  return (
    <div>
      <Hero />
      <Container
        maxWidth="lg"
        sx={{
          backgroundColor: "#F9FAFB",
          minHeight: "100vh",
          boxSizing: "border-box",
          paddingBottom: 4,
        }}
      >
        <Box
          display="flex"
          gap={4}
          p={2}
          sx={{ justifyContent: "space-between" }}
        >
          <Box sx={{ marginTop: "24px" }}>
            <Typography
              variant="h1"
              sx={{
                fontFamily: "inter",
                fontSize: "20px",
                fontWeight: "900",
                color: "#101928",
              }}
            >
              Dashbroad
            </Typography>
            <Typography
              variant="h2"
              sx={{
                fontFamily: "inter",
                fontSize: "16px",
                color: "#475367",
                fontWeight: "600",
                marginTop: "16px",
              }}
            >
              Resume
            </Typography>
          </Box>
          <Box sx={{ marginTop: "24px" }}>
            <Button variant="contained" sx={{ fontSize: "12px" }}>
              Create Cv!
            </Button>
          </Box>
        </Box>
        <hr></hr>
        <Box
          sx={{
            display: "flex",
            gap: 2,
            flexWrap: "wrap",
            maxWidth: "100%",
            boxSizing: "border-box",
          }}
        >
          <Paper
            elevation={0}
            sx={{ padding: 1, maxWidth: 200, maxHeight: 250, marginTop: 6 }}
          >
            <Typography variant="h4" component="h1" gutterBottom>
              CV{" "}
            </Typography>
            <Typography variant="body1" component="p">
              This is an example of the Paper component from Material-UI. It
              provides a clean and elevated surface for your content, making it
              stand out from the background.
            </Typography>
          </Paper>
          <Paper
            elevation={0}
            sx={{ padding: 1, maxWidth: 200, maxHeight: 250, marginTop: 6 }}
          >
            <Typography variant="h4" component="h1" gutterBottom>
              CV{" "}
            </Typography>
            <Typography variant="body1" component="p">
              This is an example of the Paper component from Material-UI. It
              provides a clean and elevated surface for your content, making it
              stand out from the background.
            </Typography>
          </Paper>
          <Paper
            elevation={0}
            sx={{ padding: 1, maxWidth: 200, maxHeight: 250, marginTop: 6 }}
          >
            <Typography variant="h4" component="h1" gutterBottom>
              CV{" "}
            </Typography>
            <Typography variant="body1" component="p">
              This is an example of the Paper component from Material-UI. It
              provides a clean and elevated surface for your content, making it
              stand out from the background.
            </Typography>
          </Paper>

          <Paper
            elevation={0}
            sx={{ padding: 1, maxWidth: 200, maxHeight: 250, marginTop: 6 }}
          >
            <Typography variant="h4" component="h1" gutterBottom>
              CV{" "}
            </Typography>
            <Typography variant="body1" component="p">
              This is an example of the Paper component from Material-UI. It
              provides a clean and elevated surface for your content, making it
              stand out from the background.
            </Typography>
          </Paper>

          <Paper
            elevation={0}
            sx={{ padding: 1, maxWidth: 200, maxHeight: 250, marginTop: 6 }}
          >
            <Typography variant="h4" component="h1" gutterBottom>
              CV{" "}
            </Typography>
            <Typography variant="body1" component="p">
              This is an example of the Paper component from Material-UI. It
              provides a clean and elevated surface for your content, making it
              stand out from the background.
            </Typography>
          </Paper>
        </Box>
      </Container>
    </div>
  );
}

export default Dashbroad;

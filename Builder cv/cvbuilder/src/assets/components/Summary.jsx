import React from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Typography, Box, Divider } from "@mui/material";
import Stack from "@mui/material/Stack";

import "./ContactInfo.css";
import Grid from "@mui/material/Grid";
import Header from "./Header";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";

function Summary({ onPrevious, onNext, progress }) {
  return (
    <div className="wrap">
      <div className="wrap_grid">
        <Header progress={progress} />
        <h2>Tell us about your experience</h2>
        <Grid
          container
          spacing={3}
          direction="column"
          justifyContent="center"
          style={{ width: "450px" }}
        >
          <Grid item xs={12}>
            <TextField
              id="outlined-multiline-static"
              label="Summary:"
              multiline
              rows={4}
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <Stack
              direction="row"
              justifyContent="space-between"
              alignItems="baseline"
              spacing={2}
            >
              <Button variant="outlined" onClick={onPrevious}>
                Back
              </Button>
              <Button variant="contained" onClick={onNext}>
                Next
              </Button>
            </Stack>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default Summary;

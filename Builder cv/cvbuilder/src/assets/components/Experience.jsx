import React from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Typography, Box, Divider } from "@mui/material";
import Stack from "@mui/material/Stack";

import "./ContactInfo.css";
import Grid from "@mui/material/Grid";
import Header from "./Header";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
parent;

function Experience({ onPrevious, onNext, progress }) {
  return (
    <div className="wrap">
      <div className="wrap_grid">
        <Header progress={progress} />
        <h2>Tell us about your experience</h2>
        <Grid container spacing={3} direction="column" justifyContent="center">
          <Grid item xs={12}>
            <Grid container spacing={3}>
              <Grid item xs={6}>
                <TextField
                  label="Job title:"
                  id="outlined-size-small"
                  size="small"
                  className="no-wrap-textfield"
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  label="Employer"
                  id="outlined-size-small"
                  size="small"
                  className="no-wrap-textfield"
                />
              </Grid>
            </Grid>
          </Grid>

          <Grid item xs={12}>
            <Grid container spacing={3}>
              <Grid item xs={6}>
                <TextField
                  label="Start date"
                  id="outlined-size-small"
                  type="email"
                  size="small"
                  className="no-wrap-textfield"
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  label="End date"
                  id="outlined-size-small"
                  type="tel"
                  size="small"
                  className="no-wrap-textfield"
                />
              </Grid>
            </Grid>
          </Grid>

          <Grid item xs={12}>
            <TextField
              id="outlined-multiline-static"
              label="Description"
              multiline
              rows={4}
              fullWidth
            />
          </Grid>
          <Grid item xs={12} container alignItems="center">
            <Box mr={1}>
              <AddCircleOutlineIcon
                color="primary"
                fontSize="small"
                sx={{ cursor: "pointer" }}
              />
            </Box>

            <Typography sx={{ cursor: "pointer", color: "blue" }} variant="p">
              Add Employment
            </Typography>
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

export default Experience;

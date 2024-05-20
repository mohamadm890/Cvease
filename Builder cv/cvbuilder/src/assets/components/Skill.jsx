import React from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Typography, Box, Divider } from "@mui/material";
import Stack from "@mui/material/Stack";

import "./ContactInfo.css";
import Grid from "@mui/material/Grid";
import Header from "./Header";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";

function Skill({ onPrevious, onNext, progress }) {
  return (
    <div className="wrap">
      <div className="wrap_grid ">
        <Header progress={progress} />
        <h2>Tell us about your Skills</h2>
        <Grid
          container
          spacing={3}
          direction="column"
          justifyContent="center"
          style={{ width: "450px" }}
        >
          <Grid item xs={12}>
            <Grid container spacing={3}>
              <Grid item xs={6}>
                <TextField
                  label="Skill"
                  id="outlined-size-small"
                  size="small"
                  className="no-wrap-textfield"
                />
              </Grid>
            </Grid>
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
              Add more Skill
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

export default Skill;

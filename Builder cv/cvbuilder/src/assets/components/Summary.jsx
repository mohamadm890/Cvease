import React from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Typography, Box, Divider } from "@mui/material";
import Stack from "@mui/material/Stack";

import "./ContactInfo.css";

import Grid from "@mui/material/Grid";
import Header from "./Header";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { store_cv } from "./store";
import { motion } from "framer-motion";

function Summary({ onPrevious, onNext, progress }) {
  const formData = store_cv((state) => state.formData);
  const setFormData = store_cv((state) => state.setFormData);

  const summary = formData ? formData.summary : "";

  const handleInputChange = (field) => (event) => {
    setFormData({ [field]: event.target.value });
  };
  console.log(formData);
  return (
    <div className="wrap">
      <motion.div
        className="wrap_grid"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="wrap_grid">
          <Header progress={progress} />
          <Typography
            sx={{
              fontWeight: "bold",
              color: "#101928",
              marginTop: "24px",
              marginBottom: "12px",
              fontSize: "20px",
            }}
          >
            Tell us about your experience
          </Typography>

          <h2></h2>
          <Grid
            container
            spacing={3}
            direction="column"
            justifyContent="center"
            style={{ width: "400px" }}
          >
            <Grid item xs={12}>
              <TextField
                id="outlined-multiline-static"
                label="Summary:"
                multiline
                rows={4}
                fullWidth
                value={summary}
                onChange={handleInputChange("summary")}
                sx={{
                  backgroundColor: "white",
                }}
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
      </motion.div>
    </div>
  );
}

export default Summary;

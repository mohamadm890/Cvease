import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Typography, Box, Grid } from "@mui/material";
import Stack from "@mui/material/Stack";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { motion } from "framer-motion";
import Header from "./Header";
import { store_cv } from "./store";

function Experience({ onPrevious, onNext, progress }) {
  const formData = store_cv((state) => state.formData);
  const setFormData = store_cv((state) => state.setFormData);
  const add_Experience = store_cv((state) => state.add_Experience);

  const handleInputChange = (field, index) => (event) => {
    const newExperience = formData.Experience.map((edu, i) =>
      i === index ? { ...edu, [field]: event.target.value } : edu
    );
    setFormData({ Experience: newExperience });
  };

  const [expandedPanel, setExpandedPanel] = useState(null);

  const handlePanelChange = (panel) => (event, isExpanded) => {
    setExpandedPanel(isExpanded ? panel : null); // Collapse the panel if it's already expanded
  };

  const handleAddExperience = () => {
    add_Experience();
  };

  return (
    <div className="wrap" style={{ padding: "2px 12px" }}>
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
            Tell us about your experience{" "}
          </Typography>
          <Button onClick={handleAddExperience}>add experience</Button>
          {formData.Experience.map((experience, index) => (
            <Accordion
              key={index}
              expanded={expandedPanel === index}
              onChange={handlePanelChange(index)}
              sx={{
                width: "400px", // Set the width of the Accordion
                marginBottom: "20px", // Add margin bottom for spacing
              }}
            >
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography>
                  {experience.job_title || "New Experience"}
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Grid container spacing={3} direction="column">
                  <Grid item xs={12}>
                    <TextField
                      label="Job title"
                      size="small"
                      value={experience.job_title}
                      onChange={handleInputChange("job_title", index)}
                      sx={{ width: "100%" }}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      label="Employer"
                      size="small"
                      value={experience.employer}
                      onChange={handleInputChange("employer", index)}
                      sx={{ width: "100%" }}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      label="Start date"
                      type="date"
                      size="small"
                      value={experience.start_date}
                      onChange={handleInputChange("start_date", index)}
                      sx={{ width: "100%" }}
                      InputLabelProps={{
                        shrink: true,
                      }}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      label="End date"
                      type="date"
                      size="small"
                      value={experience.end_date}
                      onChange={handleInputChange("end_date", index)}
                      InputLabelProps={{
                        shrink: true,
                      }}
                      sx={{ width: "100%", marginTop: "8px" }}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      label="Description"
                      multiline
                      rows={4}
                      fullWidth
                      value={experience.Description_job}
                      onChange={handleInputChange("Description_job", index)}
                    />
                  </Grid>
                </Grid>
              </AccordionDetails>
            </Accordion>
          ))}
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="baseline"
            spacing={2}
            style={{ marginBottom: "50px" }}
          >
            <Button variant="outlined" onClick={onPrevious}>
              Back
            </Button>
            <Button variant="contained" onClick={onNext}>
              Next
            </Button>
          </Stack>
        </div>
      </motion.div>
    </div>
  );
}

export default Experience;

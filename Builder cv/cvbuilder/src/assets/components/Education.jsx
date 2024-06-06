import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Typography, Box, Grid } from "@mui/material";
import Stack from "@mui/material/Stack";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { motion } from "framer-motion";
import Header from "./Header";
import { store_cv } from "./store";
import "./ContactInfo.css";

function Education({ onPrevious, onNext, progress }) {
  const formData = store_cv((state) => state.formData);
  const setFormData = store_cv((state) => state.setFormData);
  const addEducation = store_cv((state) => state.addEducation);
  const [expandedPanel, setExpandedPanel] = useState(null);

  const handlePanelChange = (panel) => (event, isExpanded) => {
    setExpandedPanel(isExpanded ? panel : null); // Collapse the panel if it's already expanded
  };

  const handleInputChange = (field, index) => (event) => {
    const newEducations = formData.educations.map((edu, i) =>
      i === index ? { ...edu, [field]: event.target.value } : edu
    );
    setFormData({ educations: newEducations });
  };

  const handleAddEducation = () => {
    addEducation();
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
            Tell us about your education{" "}
          </Typography>
          <Button onClick={handleAddEducation}>Add Education</Button>
          {formData.educations.map((education, index) => (
            <Accordion
              key={index}
              sx={{
                width: "400px", // Set the width of the Accordion
                marginBottom: "20px", // Add margin bottom for spacing
              }}
              expanded={expandedPanel === index}
              onChange={handlePanelChange(index)}
            >
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography>
                  {education.school_name || "New Education"}
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Grid container spacing={3} direction="column">
                  <Grid item xs={12}>
                    <TextField
                      label="School Name"
                      size="small"
                      value={education.school_name}
                      onChange={handleInputChange("school_name", index)}
                      sx={{ width: "100%" }}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      label="Degree"
                      size="small"
                      value={education.degree}
                      onChange={handleInputChange("degree", index)}
                      sx={{ width: "100%" }}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      label="Start Date"
                      type="date"
                      size="small"
                      value={education.start_date_degree}
                      onChange={handleInputChange("start_date_degree", index)}
                      sx={{ width: "100%" }}
                      InputLabelProps={{
                        shrink: true,
                      }}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      label="End Date"
                      type="date"
                      size="small"
                      value={education.end_date_degree}
                      onChange={handleInputChange("end_date_degree", index)}
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
                      value={education.Description_degree}
                      onChange={handleInputChange("Description_degree", index)}
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
            style={{ marginBottom: "20px" }}
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

export default Education;

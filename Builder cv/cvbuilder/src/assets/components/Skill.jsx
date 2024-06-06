import React, { useState, useEffect } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Typography, Box } from "@mui/material";
import Stack from "@mui/material/Stack";
import Chip from "@mui/material/Chip";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import "./ContactInfo.css";
import Grid from "@mui/material/Grid";
import Header from "./Header";

import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { store_cv } from "./store";
import { motion } from "framer-motion";

const schema = yup
  .object({
    name: yup.string().required("Name is required"),
    skill: yup.string().required("Skill needed!"),
  })
  .required();

function Skill({ onPrevious, onNext, progress }) {
  const formData = store_cv((state) => state.formData);
  const setFormData = store_cv((state) => state.setFormData);
  const add_skill = store_cv((state) => state.add_skill);
  const delete_skill = store_cv((state) => state.delete_skill);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });
  console.log(register("skill"));

  const [newSkill, setNewSkill] = useState("");
  const addNewSkill = () => {
    if (newSkill.trim() !== "") {
      add_skill();
      setFormData({
        ...formData,
        skill: [...formData.skill, { skill: newSkill }],
      });
      setNewSkill("");
    }
  };

  const handleInputChange = (event) => {
    setNewSkill(event.target.value);
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      addNewSkill();
    }
  };
  const eventHandle = (event) => {
    event.preventDefault();
  };

  const onSubmit = (event) => {
    event.preventDefault();
    console.log("Done!");
  };

  return (
    <div className="wrap">
      <motion.div
        className="wrap_grid"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <form noValidate>
          <div className="wrap_grid ">
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
              Tell us about your Skills
            </Typography>

            <Grid
              container
              spacing={3}
              direction="column"
              style={{ width: "400px" }}
              justifyContent="center"
            >
              <Grid item xs={12}>
                <TextField
                  label="Skill"
                  size="small"
                  className="no-wrap-textfield"
                  sx={{
                    backgroundColor: "white",
                  }}
                  onChange={handleInputChange}
                  onKeyPress={handleKeyPress}
                  value={newSkill}
                />
              </Grid>
              {formData.skill.map((skill, index) => (
                <Stack
                  key={index}
                  direction="row"
                  justifyContent="space-between"
                  alignItems="baseline"
                  spacing={2}
                  style={{
                    marginBottom: "8px",
                    marginTop: "8px",
                    marginLeft: "20px",
                  }}
                >
                  <Chip
                    label={skill.skill}
                    onDelete={() => delete_skill(index)}
                    sx={{ mr: 1, mb: 1 }}
                  />
                </Stack>
              ))}

              <Grid item xs={12} container alignItems="center">
                <Box mr={1}>
                  <AddCircleOutlineIcon
                    color="primary"
                    fontSize="small"
                    sx={{ cursor: "pointer" }}
                    onClick={addNewSkill}
                  />
                </Box>
                <Typography
                  sx={{ cursor: "pointer", color: "blue" }}
                  variant="p"
                  onClick={addNewSkill}
                >
                  Add skill
                </Typography>
                <Grid item xs={12} sx={{ marginTop: "20px" }}>
                  <Stack
                    direction="row"
                    justifyContent="space-between"
                    alignItems="baseline"
                    spacing={4}
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
            </Grid>
          </div>
        </form>
      </motion.div>
    </div>
  );
}

export default Skill;

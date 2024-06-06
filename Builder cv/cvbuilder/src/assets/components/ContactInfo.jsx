import React from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "./ContactInfo.css";
import Grid from "@mui/material/Grid";
import Header from "./Header";
import Stack from "@mui/material/Stack";
import { store_cv } from "./store";
import { motion } from "framer-motion";
import { Typography } from "@mui/material";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm, Controller } from "react-hook-form";

const schema = yup.object().shape({
  first_name: yup.string().required("First Name is required"),
  last_name: yup.string().required("Last Name is required"),
  email: yup
    .string()
    .email("Invalid email format")
    .required("Email is required"),
  phone: yup
    .number()
    .typeError("Phone must be a number")
    .required("Number is required"),
});

function ContactInfo({ onNext, progress }) {
  const formData = store_cv((state) => state.formData);
  const setFormData = store_cv((state) => state.setFormData);

  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      first_name: formData ? formData.first_name : "",
      last_name: formData ? formData.last_name : "",
      email: formData ? formData.email : "",
      phone: formData ? formData.phone : "",
      city: formData ? formData.city : "",
      address: formData ? formData.address : "",
    },
  });

  const onSubmit = (data) => {
    setFormData(data);
    console.log(formData);

    onNext();
  };

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
            Your contact Info
          </Typography>
          <form onSubmit={handleSubmit(onSubmit)}>
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
                    <Controller
                      name="first_name"
                      control={control}
                      render={({ field }) => (
                        <TextField
                          {...field}
                          label="First Name"
                          id="outlined-size-small"
                          size="small"
                          className="no-wrap-textfield"
                          sx={{
                            backgroundColor: "white",
                          }}
                          error={!!errors.first_name}
                          helperText={errors.first_name?.message}
                        />
                      )}
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <Controller
                      name="last_name"
                      control={control}
                      render={({ field }) => (
                        <TextField
                          {...field}
                          label="Last Name"
                          id="outlined-size-small"
                          size="small"
                          className="no-wrap-textfield"
                          sx={{
                            backgroundColor: "white",
                          }}
                          error={!!errors.last_name}
                          helperText={errors.last_name?.message}
                        />
                      )}
                    />
                  </Grid>
                </Grid>
              </Grid>

              <Grid item xs={12}>
                <Grid container spacing={3}>
                  <Grid item xs={6}>
                    <Controller
                      name="email"
                      control={control}
                      render={({ field }) => (
                        <TextField
                          {...field}
                          label="Email"
                          id="outlined-size-small"
                          type="email"
                          size="small"
                          className="no-wrap-textfield"
                          sx={{
                            backgroundColor: "white",
                          }}
                          error={!!errors.email}
                          helperText={errors.email?.message}
                        />
                      )}
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <Controller
                      name="phone"
                      control={control}
                      render={({ field }) => (
                        <TextField
                          {...field}
                          label="Phone Number"
                          id="outlined-size-small"
                          type="tel"
                          size="small"
                          className="no-wrap-textfield"
                          sx={{
                            backgroundColor: "white",
                          }}
                          error={!!errors.phone}
                          helperText={errors.phone?.message}
                        />
                      )}
                    />
                  </Grid>
                </Grid>
              </Grid>

              <Grid item xs={12}>
                <Grid container spacing={3}>
                  <Grid item xs={6}>
                    <Controller
                      name="city"
                      control={control}
                      render={({ field }) => (
                        <TextField
                          {...field}
                          label="City"
                          id="outlined-size-small"
                          size="small"
                          className="no-wrap-textfield"
                          sx={{
                            backgroundColor: "white",
                          }}
                        />
                      )}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Controller
                      name="address"
                      control={control}
                      render={({ field }) => (
                        <TextField
                          {...field}
                          fullWidth
                          label="Address"
                          id="outlined-size-small"
                          size="small"
                          className="no-wrap-textfield"
                          sx={{
                            backgroundColor: "white",
                          }}
                        />
                      )}
                    />
                  </Grid>
                </Grid>
              </Grid>

              <Grid item xs={12}>
                <Stack
                  direction="row"
                  justifyContent="space-between"
                  alignItems="baseline"
                  spacing={2}
                >
                  <Button type="submit" variant="contained">
                    Next
                  </Button>
                </Stack>
              </Grid>
            </Grid>
          </form>
        </div>
      </motion.div>
    </div>
  );
}

export default ContactInfo;

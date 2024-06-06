import React from "react";
import { useForm } from "react-hook-form";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Typography from "@mui/material/Typography";

const schema = yup.object().shape({
  email: yup.string().required("First Name is required").email(),
  password: yup.string().required("Last Name is required"),
});

const Sign = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log(data);
    console.log("Done!");
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundColor: "#F7F9FC",
      }}
    >
      <form onSubmit={handleSubmit(onSubmit)}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            maxWidth: 300,
            backgroundColor: "white",
            padding: 8,
            paddingLeft: 8,
            paddingRight: 8,
            borderRadius: 4,
            boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
          }}
        >
          <Box sx={{ marginBottom: 2 }}>
            <Typography variant="h6" sx={{ fontSize: 20, color: "#101928" }}>
              log in
            </Typography>
          </Box>
          <TextField
            label="Email"
            variant="outlined"
            {...register("email", { required: true })}
            error={!!errors.email}
            helperText={errors.email ? "You have to enter your mail" : ""}
            margin="normal"
            sx={{
              backgroundColor: "white",
            }}
          />
          <TextField
            type="password"
            label="Password"
            variant="outlined"
            {...register("password", { required: true })}
            error={!!errors.password}
            helperText={errors.password ? "Password is required" : ""}
            margin="normal"
            sx={{ backgroundColor: "white" }}
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            sx={{ mt: 2 }}
          >
            Submit
          </Button>
        </Box>
      </form>
    </Box>
  );
};

export default Sign;

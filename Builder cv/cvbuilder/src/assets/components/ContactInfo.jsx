import React from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "./ContactInfo.css";
import Grid from "@mui/material/Grid";
import Header from "./Header";
function ContactInfo({ setName }) {
  const handleFirstNameChange = (e) => setName(e.target.value);

  return (
    <div className="wrap">
      <div className="wrap_grid">
        <Header />
        <h2>Your contact Info</h2>
        <Grid container spacing={3} direction="column" justifyContent="center">
          <Grid item xs={12}>
            <Grid container spacing={3}>
              <Grid item xs={6}>
                <TextField
                  label="First Name"
                  id="outlined-size-small"
                  defaultValue=""
                  size="small"
                  className="no-wrap-textfield"
                  onChange={handleFirstNameChange}
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  label="Last Name"
                  id="outlined-size-small"
                  defaultValue=""
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
                  label="Email"
                  id="outlined-size-small"
                  type="email"
                  defaultValue=""
                  size="small"
                  className="no-wrap-textfield"
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  label="Phone Number"
                  id="outlined-size-small"
                  type="tel"
                  defaultValue=""
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
                  label="City"
                  id="outlined-size-small"
                  defaultValue=""
                  size="small"
                  className="no-wrap-textfield"
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  label="Post Code"
                  id="outlined-size-small"
                  defaultValue=""
                  size="small"
                  className="no-wrap-textfield"
                />
              </Grid>
            </Grid>
          </Grid>

          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Address"
              id="outlined-size-small"
              defaultValue=""
              size="small"
              className="no-wrap-textfield"
            />
          </Grid>

          <Grid item xs={12}>
            <Button variant="contained">Contained</Button>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default ContactInfo;

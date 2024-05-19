import React from "react";
import {
  Container,
  Typography,
  Grid,
  Paper,
  Box,
  Avatar,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";

const Cvtheme = ({ name }) => {
  return (
    <>
      <div className="view_cv">
        <Container maxWidth="md" style={{ marginTop: "20px" }}>
          <Paper elevation={3} style={{ padding: "20px" }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={4}>
                <Avatar
                  alt="Jack"
                  src="https://via.placeholder.com/150"
                  style={{ width: 150, height: 150 }}
                />
              </Grid>
              <Grid item xs={12} sm={8}>
                <Typography variant="h4">{`${name}`}</Typography>
                <Typography variant="h6" color="textSecondary">
                  ReactJS Developer
                </Typography>
                <List>
                  <ListItem>
                    <ListItemText primary="jack@example.com" />
                  </ListItem>
                  <ListItem>
                    <ListItemText primary="+123 456 7890" />
                  </ListItem>
                </List>
              </Grid>
            </Grid>
            <Box mt={4}>
              <Typography variant="h5">Experience</Typography>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <Paper elevation={1} style={{ padding: "10px" }}>
                    <Typography variant="h6">
                      Frontend Developer at XYZ Corp
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                      Jan 2020 - Present
                    </Typography>
                    <Typography variant="body1">
                      Developed and maintained web applications using ReactJS
                      and Redux.
                    </Typography>
                  </Paper>
                </Grid>
                <Grid item xs={12}>
                  <Paper elevation={1} style={{ padding: "10px" }}>
                    <Typography variant="h6">
                      Junior Developer at ABC Inc
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                      Jun 2018 - Dec 2019
                    </Typography>
                    <Typography variant="body1">
                      Assisted in developing web applications and worked closely
                      with the design team to implement UI components.
                    </Typography>
                  </Paper>
                </Grid>
              </Grid>
            </Box>
            <Box mt={4}>
              <Typography variant="h5">Education</Typography>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <Paper elevation={1} style={{ padding: "10px" }}>
                    <Typography variant="h6">
                      BSc in Computer Science
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                      University of Somewhere, 2014 - 2018
                    </Typography>
                  </Paper>
                </Grid>
              </Grid>
            </Box>
            <Box mt={4}>
              <Typography variant="h5">Skills</Typography>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <Paper elevation={1} style={{ padding: "10px" }}>
                    <Typography variant="body1">
                      ReactJS, Redux, JavaScript, HTML, CSS, Git, Agile
                      methodologies
                    </Typography>
                  </Paper>
                </Grid>
              </Grid>
            </Box>
          </Paper>
        </Container>
      </div>
    </>
  );
};

export default Cvtheme;

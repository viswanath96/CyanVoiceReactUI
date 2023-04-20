import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import React from 'react';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    height: "60vh",
    paddingTop: 5,
    backgroundColor: "#fff"
  },
}));

export default function Test() {
  const classes = useStyles();

  return (
      <Box my={2} >
      <Grid container   
      justify="space-between"
      alignItems="stretch"      
      spacing={3}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>xs=12</Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
              <Box height="100%" p={1} m={1} bgcolor="background.paper" boxShadow={2} borderRadius={16}>
                  Cyan Voice does not use the user's WordPress credentials but it uses dynamically created QR code to create secure login between the app and the server.
              </Box>
          </Grid>
          <Grid item xs={12} sm={6}>
              <Box height="100%" p={1} m={1} bgcolor="background.paper" boxShadow={2} borderRadius={16}>
                  Cyan Voice does not use the user's WordPress credentials but it uses dynamical
              </Box>
          </Grid>
        <Grid item xs={6} sm={3}>
          <Paper className={classes.paper}>xs=6 sm=3</Paper>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Paper className={classes.paper}>xs=6 sm=3</Paper>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Paper className={classes.paper}>xs=6 sm=3</Paper>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Paper className={classes.paper}>xs=6 sm=3</Paper>
        </Grid>
      </Grid>
      </Box>
  );
}

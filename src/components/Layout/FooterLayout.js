import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import React from 'react';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

function FooterLayout() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
        <Box bgcolor="text.primary" color="background.paper" mt={2} p={2}>        
      <Grid bgcolor="info.main" container spacing={3}>
        <Grid item xs={3}>
        <Grid
            container
            direction="column"
            justify="center"
            alignItems="start"
            >
            <Typography variant="h6" gutterBottom>Essential Links</Typography>
            <Typography variant="subtitle1" gutterBottom>Lorem ipsum dolor sit amet</Typography>
            <Typography variant="subtitle1" gutterBottom>Lorem ipsum dolor sit amet</Typography>
            <Typography variant="subtitle1" gutterBottom>Lorem ipsum dolor sit amet</Typography>
        </Grid>
        </Grid>
        <Grid item xs={3}>
        <Grid
            container
            direction="column"
            justify="center"
            alignItems="center"
            >
            <Typography variant="subtitle1" gutterBottom>Lorem ipsum dolor sit amet</Typography>
            <Typography variant="subtitle1" gutterBottom>Lorem ipsum dolor sit amet</Typography>
            <Typography variant="subtitle1" gutterBottom>Lorem ipsum dolor sit amet</Typography>
        </Grid>
        </Grid>
        <Grid item xs={3}>
        <Grid
            container
            direction="column"
            justify="center"
            alignItems="center"
            >
            <Typography variant="subtitle1" gutterBottom>Lorem ipsum dolor sit amet</Typography>
            <Typography variant="subtitle1" gutterBottom>Lorem ipsum dolor sit amet</Typography>
            <Typography variant="subtitle1" gutterBottom>Lorem ipsum dolor sit amet</Typography>
        </Grid>
        </Grid>
        <Grid item xs={3}>
        <Grid
            container
            direction="column"
            justify="center"
            alignItems="center"
            >
            <Typography variant="subtitle1" gutterBottom>Lorem ipsum dolor sit amet</Typography>
            <Typography variant="subtitle1" gutterBottom>Lorem ipsum dolor sit amet</Typography>
            <Typography variant="subtitle1" gutterBottom>Lorem ipsum dolor sit amet</Typography>
        </Grid>
        </Grid>
      </Grid>
      </Box>
    </div>
  );
}

export default FooterLayout
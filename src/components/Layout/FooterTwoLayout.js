import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import CopyrightIcon from '@material-ui/icons/Copyright';
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



function FooterTwoLayout() {

    const classes = useStyles();

    return (
        <div className={classes.root}>
                    <Box alignItems="center" bgcolor="text.primary" color="background.paper"  p={3}>        
                <Grid alignItems="center" bgcolor="info.main" container spacing={3}>
                <Grid item sm={1} md={3} lg={4} ></Grid>
                <Grid item sm={10} md={6} lg={4} >
                        <Typography variant="subtitle1" >
                            Thank You for Choosing Cyan Voice. <CopyrightIcon/> 2020
                        </Typography>
                        </Grid>
                </Grid>
                <Grid item sm={1} md={3} lg={4} ></Grid>
                    </Box>
        </div>
      );
}

export default FooterTwoLayout

import Avatar from '@material-ui/core/Avatar';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import { createMuiTheme, makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import React from 'react';
import ObserverWrapper from '@emarketeross/simple-react-intersection-observer'

const theme = createMuiTheme({
    palette: [
       {
        mainGradient: "#f4ff81",
      },
      {
        mainGradient: "#f48fb1",
      },
      {
        mainGradient: "#c5cae9",
      },
      {
        mainGradient: "#b2dfdb",
      },
      {
        mainGradient: "#b2ebf2",
      },
    ],
  });

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  large: {
    width: theme.spacing(20),
    height: theme.spacing(20),
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    paddingTop: 5,
    backgroundColor: "#fff",
  }
}));


function SecurityCard({content}) {
    
    const classes = useStyles();



    return (
  <Grid item xs={12} sm={6}>
        <Box height="100%" p={1}  bgcolor="background.paper" style={{ background: theme.palette[content.cardPalette].mainGradient }} boxShadow={2} borderRadius={16}>
            <Box m={2}>
                <Typography align="center" variant="h5">{content.h5}</Typography>
            </Box>
            <Box mt={2}>
                <Grid container direction="column" justify="space-evenly" alignItems="center">
                  <ObserverWrapper>
                    <Avatar alt="Remy Sharp" src={content.avatarimage} className={classes.large} />
                  </ObserverWrapper>
                </Grid>
            </Box>
            <Box p={2}>
                <Typography variant="body1">
                    {content.subtitle1}
                </Typography>
            </Box>
        </Box>
      </Grid>
    )
}

export default SecurityCard

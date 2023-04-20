import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { createMuiTheme, makeStyles } from '@material-ui/core/styles';
import React from 'react';
import { connect } from 'react-redux';
import SecurityCard from '../SecurityCard';



const theme = createMuiTheme({
  palette: {
     home:{
      mainGradient: "linear-gradient(90deg, rgba(250,250,250,1) 0%, rgba(0,255,255,1) 50%, rgba(250,250,250,1) 100%)",
      Gradient: " rgba(0,255,255,1) 50%",
    }
  }
});

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  large: {
    width: theme.spacing(20),
    height: theme.spacing(20),
  },
}));



function Security({...props}) {

    const classes = useStyles();


    return (
        <Box p={2} >
      <Grid p={3} container   spacing={1} >
          {props.SecuritypageContent.map(p=> {
            return(
              <SecurityCard content={p} />
            )
          })}
      </Grid>
      </Box>
    )
}

const mapStateToProps = state =>({
    SecuritypageContent : state.SecuritypageContent
  })
  

export default connect(mapStateToProps) (Security)

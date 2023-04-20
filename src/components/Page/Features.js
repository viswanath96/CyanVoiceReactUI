import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { createMuiTheme, makeStyles } from '@material-ui/core/styles';
import React from 'react';
import { connect } from 'react-redux';
import FeatureCard from '../FeatureCard';

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
  large: {
    width: theme.spacing(20),
    height: theme.spacing(20),
  },
}));

function Features({...props}) {

    const classes = useStyles();

    return (
<Box p={2} >
<Grid  container p={0} justify="flex-start" alignItems="stretch" spacing={3}>
{props.FeaturespageContent.map((c) =>{
            return(
            <FeatureCard content={c}/>
        )})}
        </Grid></Box>
    )
}

const mapStateToProps = state =>({
  FeaturespageContent : state.FeaturespageContent
})


export default connect(mapStateToProps) (Features)

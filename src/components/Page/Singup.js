import React,{ useState, useEffect } from 'react'
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import { createMuiTheme, makeStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import DownloadCard from '../DownloadCard';
import Typography from '@material-ui/core/Typography';
import SingupCard from '../SingupCard';
var qs = require('qs');

const theme = createMuiTheme({
  palette: {
     home:{
      mainGradient: "linear-gradient(90deg, rgba(250,250,250,1) 0%, rgba(0,255,255,1) 50%, rgba(250,250,250,1) 100%)",
      Gradient: " rgba(0,255,255,1) 50%",
    }
  }
});




function Signup({...props}) {

    useEffect(() => {

      
      var localguid = window.location.href.split('guid=')[1];
      if(localguid){     
        document.cookie = `guid=${localguid}`;
      }
  }, []);


  

  return (
    <Box p={2} >
      <Box mb={1} >
      <Typography align="center" component="div" variant="h3">
        Singup Cyan Voice
        </Typography>
      </Box>
      <Box m={1} >
      <Typography align="center" component="div" variant="h5">
        Sigup to CyanVoice with the below options:
        </Typography>
      </Box>
      <Grid container   
      direction="column"   
      alignItems="center"   
      spacing={3}>
                {props.SignuppageContent.map( c => {
                return(
                    <SingupCard content={c} />
                )
})}
      </Grid>
      </Box>
  );
}

const mapStateToProps = state =>({
    SignuppageContent : state.SignuppageContent
 })

export default connect(mapStateToProps) (Signup)
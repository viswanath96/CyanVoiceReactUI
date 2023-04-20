import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { createMuiTheme, makeStyles } from '@material-ui/core/styles';
import React from 'react';
import { connect } from 'react-redux';
import DownloadCard from '../DownloadCard';
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';

const theme = createMuiTheme({
  palette: {
     home:{
      mainGradient: "linear-gradient(90deg, rgba(250,250,250,1) 0%, rgba(0,255,255,1) 50%, rgba(250,250,250,1) 100%)",
      Gradient: " rgba(0,255,255,1) 50%",
    }
  }
});



function Downloads({...props}) {
  return (
    <Box p={2} >
      <Box mb={1} >
      <Typography align="center" component="div" variant="h3">
        Download Cyan Voice
        </Typography>
      </Box>
      <Box m={1} >
      <Typography align="center" component="div" variant="h5">
        Download the Free Chrome extension and the Free Android app to get started with Cyan Voice today!
        </Typography>
      </Box>
      <Grid container  spacing={3}>
{props.DonloadpageContent.map( c => {
  return(
    <DownloadCard content={c} />
  )
})}
      </Grid>
      </Box>
  );
}

const mapStateToProps = state =>({
   DonloadpageContent : state.DownloadpageContent
 })

export default connect(mapStateToProps) (Downloads)
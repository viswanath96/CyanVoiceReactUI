import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import { createMuiTheme } from '@material-ui/core/styles';
import React from 'react';
import { connect } from 'react-redux';
import FaqCard from '../FaqCard';


const theme = createMuiTheme({
  palette: {
     home:{
      mainGradient: "linear-gradient(90deg, rgba(250,250,250,1) 0%, rgba(0,255,255,1) 50%, rgba(250,250,250,1) 100%)",
      Gradient: " rgba(0,255,255,1) 50%",
    }
  }
});


function Faq({...props}) {

  return (

        <Box p={2} >
      <Grid m={2} p={2} justify="center" container spacing={3}>
      {props.FaqpageContent.map( (c,i) => {
          return(
            <FaqCard content={c}/>
          );})}
        </Grid>
        </Box>
  );
}

const mapStateToProps = state =>({
  FaqpageContent : state.FaqpageContent
})


export default connect(mapStateToProps) (Faq)
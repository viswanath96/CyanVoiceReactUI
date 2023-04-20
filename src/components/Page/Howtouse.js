import React from 'react'
import Grid from '@material-ui/core/Grid';
import { createMuiTheme } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import Box from '@material-ui/core/Box';
import HowtouseCard from '../HowtouseCard';

function Howtouse({...props}) {
    return (
        <Box p={2} >
        <Grid m={2} p={2} justify="center" container spacing={3}>
        {props.HowtousepageContent.map( (c,i) => {
          return(
            <HowtouseCard content={c}/>
          );})}
        </Grid>
        </Box>
    )
}

const mapStateToProps = state =>({
    HowtousepageContent : state.HowtousepageContent
  })

export default connect(mapStateToProps) (Howtouse)
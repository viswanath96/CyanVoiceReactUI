import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import React,{ useState, useEffect } from 'react';
import { connect } from 'react-redux';
import * as actions from "../../Data/Action/ApplicationAction";
import SuccessCard from '../SuccessCard';
import Grid from '@material-ui/core/Grid';




const Success = ({...props}) => {

  useEffect(() => {

    function getCookie(cname) {
      var name = cname + "=";
      var decodedCookie = decodeURIComponent(document.cookie);
      var ca = decodedCookie.split(';');
      for(var i = 0; i <ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
          c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
          return c.substring(name.length, c.length);
        }
      }
      return "";
    }
    var localguid = getCookie('guid');
    props.GetUserDetailsFromGuid(localguid)
    

}, [])//componentDidMount

      
  let header = "";

  if(props.UserData.emailId == "none")
  {
    header = `Loading your registered domain name using the given account.`;
  }
  else
  {
    header = `${props.UserData.userName}, you have registered the domain name ${props.UserData.domainName} using ${props.UserData.emailId}.`;
  }

  return (
    
    <Box p={2} >
      <Box mb={1} >
      <Typography align="center" component="div" variant="h3">
        Congratulations you have successfully logged into Cyan Voice
        </Typography>
      </Box>
      <Box m={1} >
      <Typography align="center" component="div" variant="h5">
        </Typography>
        <Typography align="center" component="div" variant="h5">
      Please ensure to use the same account to login to the app as well.
        </Typography>
      </Box>
      <Grid container  spacing={3}>
      <Grid item xs={12} sm={3}></Grid>
      {props.SuccesspageContent.map( c => {
        const retContent = c.provider == props.UserData.provider ? <SuccessCard content={c} DisHeader={header} /> : <div></div>
        return(retContent)
      })}
      <Grid item xs={12} sm={3}></Grid>

      </Grid>
      </Box>
  );
}

const mapStateToProps = state =>({
  UserData : state.UserData,
  SuccesspageContent : state.SuccesspageContent
})

const mapActionToProps = {
  GetUserDetailsFromGuid: actions.GetUserDetailsFromGuid,
}

export default connect(mapStateToProps,mapActionToProps) (Success)
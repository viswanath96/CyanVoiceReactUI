import React from 'react'
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom'
import Grid from '@material-ui/core/Grid';


const useStyles = makeStyles((theme) => ({
    margin: {
      margin: theme.spacing(3),
    },
    navigatorClass:{
        margin:theme.spacing(3),

    }
  }));

  // We can use inline-style
const buttonstyle1 = {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    borderRadius: 50,
    border: 0,
    color: 'white',
    height: 48,
    padding: '0 30px',
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    margin:"10px",
    fontSize:"large"
  };



function HowtouseNavigartor({...props}) {


    const classes = useStyles();


    return (
        <Grid
          container
          direction="row"
          justify="center"
          alignItems="center"
          
        >
            <Button  size="large" style={buttonstyle1} textSizeLarge="true" component={Link} to="/howtouse" >
              Check out the Video instructions today!!
            </Button>        
        </Grid>
    )
}

export default HowtouseNavigartor
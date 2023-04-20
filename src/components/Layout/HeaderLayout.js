import { AppBar, Toolbar, Typography } from '@material-ui/core';
import Link from "@material-ui/core/Link";
import { makeStyles } from '@material-ui/core/styles';
import React from 'react';
import { Link as DomLink } from 'react-router-dom';
import IconButtonShared from './Shared/IconButtonShared';
import RouteHeaderShared from './Shared/RouteHeaderShared';

const useStyles = makeStyles((theme) => ({
    linkColor: {
        underline:'none',
        '&:hover': {
           color: "#fff",
           underline:'none',

        },
        padding:3
      },
  }));

// We can use inline-style
const style = {
    background: 'linear-gradient(30deg, #00D1D1 30%, #00ffff 90%)',
    
  };

function HeaderLayout() {


    const classes = useStyles();


    return (
            <AppBar  position="static" >
                <Toolbar style={style} >
                    <IconButtonShared/>
                    <Typography variant="h5">
                        <Link className={classes.linkColor} component={DomLink} color="inherit" to="/">Cyan Voice</Link>
                    </Typography>
                    <RouteHeaderShared/>
                </Toolbar>
            </AppBar>
    )
}

export default HeaderLayout

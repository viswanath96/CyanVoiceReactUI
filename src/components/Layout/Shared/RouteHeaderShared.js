import Box from '@material-ui/core/Box';
import Hidden from '@material-ui/core/Hidden';
import Link from "@material-ui/core/Link";
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import React from 'react';
import { connect } from 'react-redux';
import { Link as DomLink } from 'react-router-dom';


  const useStyles = makeStyles((theme) => ({
    linkColor: {
        underline:'none',
        '&:hover': {
           color: "#fff",
           underline:'none',

        },
      },
  }));

function RouteHeaderShared({...props}) {
    const classes = useStyles();

    return (
        <React.Fragment>
            <Hidden smDown >
            {props.routeLinks.map(links => 
                <Box p={1} >
                    <Typography variant="subtitle1" >
                        <Link className={classes.linkColor} component={DomLink} color="inherit" to={links.link}>{links.text}</Link>
                    </Typography>
                </Box> 
            )}
            </Hidden>
        </React.Fragment>
    )
}

const mapStateToProps = state => ({
    routeLinks:state.RouteNavigation
})

export default connect(mapStateToProps) (RouteHeaderShared)

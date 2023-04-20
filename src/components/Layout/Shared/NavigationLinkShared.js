import Link from '@material-ui/core/Link';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import { makeStyles } from '@material-ui/core/styles';
import React from 'react';
import { connect } from 'react-redux';
import { Link as DomLink } from 'react-router-dom';


const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
  },
}));

function NavigationLinkShared({...props}) {

    const classes = useStyles();

    return (
        <div>
          <div className={classes.toolbar} />
            <List>
            {props.routeLinks.map(links => 
                <ListItem button key={links.text}>
                  <Link component={DomLink} color="inherit" to={links.link}>{links.text}</Link>
                </ListItem>
            )}
            </List>
        </div>
        
    )
}

const mapStateToProps = state =>(
  {
    routeLinks:state.RouteNavigation
  }
)

export default connect(mapStateToProps) (NavigationLinkShared)

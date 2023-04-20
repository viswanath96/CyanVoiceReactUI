import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../Data/Action/ApplicationAction';
import NavigationLinkShared from './Shared/NavigationLinkShared';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  drawerPaper: {
    width: drawerWidth,
  },
}));

function NavigationLayout({...props}) {
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);


  return (
    <div >
      <CssBaseline />
      <nav className={classes.drawer} aria-label="mailbox folders">
        <Hidden smUp implementation="css">
          <Drawer
            variant="temporary"
            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
            open={props.mobileOpen}
            onClose={props.iconButtonclick}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            <NavigationLinkShared/>
          </Drawer>
        </Hidden>
      </nav>
    </div>
  );
}

const mapActionToProps = {
  iconButtonclick : actions.NavigationButtonClick
}

const mapStateToProps = state => ({
  mobileOpen : state.NavigationMobileOpen
})
export default connect(mapStateToProps,mapActionToProps) (NavigationLayout);

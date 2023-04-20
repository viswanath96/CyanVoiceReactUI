import IconButton from '@material-ui/core/IconButton';
import { makeStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import React from 'react';
import { connect } from "react-redux";
import * as actions from '../../../Data/Action/ApplicationAction';


const useStyles = makeStyles(theme => ({
    menuButton: {
        marginRight: theme.spacing(2),
        [theme.breakpoints.up('md')]: {
            display: 'none',
        },
    },
}));


function IconButtonShared({...props}) {


    const classes = useStyles();


    return (
        <div>
            <IconButton
                className={classes.menuButton}
                edge="start"
                color="inherit"
                aria-label="open drawer"
                onClick={props.iconButtonclick}
                >
                    <MenuIcon />
            </IconButton>
        </div>
    )
}

const mapActionToProps = {
    iconButtonclick : actions.NavigationButtonClick
}

const mapStateToProps = state => {

}

export default connect(mapStateToProps,mapActionToProps) (IconButtonShared)

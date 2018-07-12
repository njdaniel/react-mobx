import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';


const styles = {
    root: {
        flexGrow: 1,
    },
    flex: {
        flex: 1,
    },
    menuButton: {
        marginLeft: -12,
        marginRight: 20,
    },
};

function ButtonAppBar(props) {
    const { classes } = props;
    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="title" color="inherit" className={classes.flex}>
                        OEI Alerts
                    </Typography>
                    <LoggedOutView isAuthenticated={props.isAuthenticated}/>
                    <LoggedInView
                        isAuthenticated={props.isAuthenticated}
                        user={props.user}/>
                </Toolbar>
            </AppBar>
        </div>
    );
}

ButtonAppBar.propTypes = {
    classes: PropTypes.object.isRequired,
};

const LoggedOutView = props => {
    if (!props.isAuthenticated) {
        return (
            <Button  href="/login" color="inherit">Login</Button>
        );
    }
    return null;
};

const LoggedInView = props => {
    if (props.isAuthenticated) {
        return (
            <Button>Sign out, {props.user}</Button>
        );
    }
    return null;
};


export default withStyles(styles)(ButtonAppBar);
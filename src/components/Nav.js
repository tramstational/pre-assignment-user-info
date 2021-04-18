import React from 'react';
import { AppBar, Toolbar, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
    button_root: {
        color: 'white'
    },
}));


export default function SearchAppBar() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <ul>
                        <Link to='/' style={{ textDecoration: "none" }}>
                            <Button classes={{root: classes.button_root}}>
                                Home
                            </Button>
                        </Link>
                    </ul>
                </Toolbar>
            </AppBar>
        </div>
    );
}

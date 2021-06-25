import React from 'react';
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import TableCallHistory from '../components/TableCallHistory';

CallHistoryPage.propTypes = {

};

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        padding: theme.spacing(2),
        textAlign: "center"
    },
}));

function CallHistoryPage(props) {
    const classes = useStyles();

    return (
        <Paper className={classes.root}>
            <Typography style={{ "marginBottom": "12px" }} variant="h2" component="h2">Lịch sử cuộc gọi</Typography>
            <TableCallHistory></TableCallHistory>
        </Paper>
    );
}

export default CallHistoryPage;
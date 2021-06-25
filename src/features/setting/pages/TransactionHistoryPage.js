import React from 'react';
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import TableTransactionHistory from '../components/TableTransactionHistory';

TransactionHistoryPage.propTypes = {

};

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        padding: theme.spacing(2),
        textAlign: "center"
    },
}));

function TransactionHistoryPage(props) {
    const classes = useStyles();

    return (
        <Paper className={classes.root}>
            <Typography style={{"marginBottom":"12px"}} variant="h2" component="h2">Lịch sử giao dịch</Typography>
            <TableTransactionHistory></TableTransactionHistory>
        </Paper>
    );
}

export default TransactionHistoryPage;
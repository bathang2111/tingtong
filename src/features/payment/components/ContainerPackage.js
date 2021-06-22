import React from 'react';
import PropTypes from 'prop-types';
import { Grid } from '@material-ui/core';
import PaymentItem from './packageItem';
import { makeStyles } from '@material-ui/styles';

ContainerPackage.propTypes = {

};

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },

    item: {
        display: 'flex',
        justifyContent: 'center',
        margin: theme.spacing(2)
    }

}));

function ContainerPackage({ packages, onSelect }) {
    const classes = useStyles();

    return (
        <Grid container
            direction="row"
            justify="center"
            alignItems="center">
            {packages && packages.map((item, index) => {
                return <Grid className={classes.item} key={index} item xs={6} md={3}>
                    <PaymentItem item={item}></PaymentItem>
                </Grid>
            })}
        </Grid>
    );
}

export default ContainerPackage;
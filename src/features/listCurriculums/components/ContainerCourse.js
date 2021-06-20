import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Pagination from '@material-ui/lab/Pagination';
import Grid from '@material-ui/core/Grid';
import ItemCourse from '../../listCourses/components/itemCourse/ItemCourse';

ContainerCourse.propTypes = {

};

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        backgroundColor: theme.palette.background.paper,
    },

    pagination: {
        display: 'flex',
        width: '100%',
        justifyContent: 'center',
        margin: theme.spacing(2)
    }
}));

function ContainerCourse({ courses, totalPage, page, onChangePage }) {

    const classes = useStyles();

    return (
        <Grid container className={classes.root}>
            <Grid container
                direction="row"
                alignItems="center">
                {courses && courses.map((item, index) => {
                    return <Grid item key={index} row xs={6} md={4}>
                        <ItemCourse course={item}>
                        </ItemCourse>
                    </Grid>
                })}
            </Grid>

            <div className={classes.pagination}>
                <Pagination size="large" color="primary" count={totalPage} page={page} siblingCount={0} onChange={onChangePage} />
            </div>
        </Grid>
    );
}

export default ContainerCourse;
import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import ItemCourse from '../itemCourse/ItemCourse';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/styles';
import { useHistory } from 'react-router-dom';
ItemCurriculum.propTypes = {

};
const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        marginTop: theme.spacing(2)
    },
    description: {
        width: "100%",
        maxWidth: "750px",
        fontSize: '1.0rem',
        fontWeight: 400,
        lineHeight: 1.5,
        fontFamily: 'inherit',
        marginTop: theme.spacing(2)
    }
}));

function ItemCurriculum({ curriculum }) {
    const classes = useStyles();
    const history = useHistory();
    return (
        <Grid row className={classes.root}>
            <Grid item>
                <Grid item container
                    direction="row"
                    justify="start"
                    alignItems="center" style={{'justifyContent': 'space-between'}}>
                    <Typography style={{'magin': 0}} gutterBottom variant="h4" component="h4">
                        {curriculum.title}
                    </Typography>

                    <Button onClick={() => history.push(`curriculums/${curriculum.id}/courses`)} size="small" color="primary">
                        Xem tất cả
                    </Button>
                </Grid>

                <Typography className={classes.description} variant="body1" color="black" component="p">
                    {curriculum.description}
                </Typography>
            </Grid>

            <Grid item container
                direction="row"
                justify="start"
                alignItems="center">
                {curriculum && curriculum.courses.map(item => {
                    return <Grid row xs={6} md={3}>
                        <ItemCourse course={item}>
                        </ItemCourse>
                    </Grid>
                })}
            </Grid>
        </Grid>
    );
}

export default ItemCurriculum;
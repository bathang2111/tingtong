import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Grid } from '@material-ui/core';
import { useHistory } from 'react-router-dom';

ItemCourse.propTypes = {

};

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 257,
        maxHeight: 374,
        minHeight: 374,
        marginTop: theme.spacing(2)
    },

}));

function ItemCourse({ course }) {
    const classes = useStyles();
    const history=useHistory()

    return (
        <Card onClick={()=>history.push(`/courses/${course.id}`)} className={classes.root}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    alt="Contemplative Reptile"
                    height="220"
                    image={course.avatar}
                    title="Contemplative Reptile"
                />
                <CardContent>
                    <Typography noWrap gutterBottom variant="h5" component="h2">
                        {course.name}
                    </Typography>
                    <Typography  noWrap variant="body2" color="textSecondary" component="p">
                        {course.description}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Grid direction="row"
                    justify="start"
                    flex
                    justifyContent="flex-end"
                    alignItems="center">
                    <Button size="small" color="primary">
                        Xem chi tiết
                    </Button>
                </Grid>
            </CardActions>
        </Card>
    );
}

export default ItemCourse;
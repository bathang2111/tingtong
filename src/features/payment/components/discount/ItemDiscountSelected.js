import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import image from '../../../../assets/images/imageCapGold.png';
import { formatUnit } from '../../../../utils/unitUtils';
import moment from 'moment';
import { Button, IconButton } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
const useStyles = makeStyles(theme => ({
    root: {
        minWidth: '100%',
    },
    img: {
        [theme.breakpoints.down('sm')]: {
            width: 50,
            height: 50
        },
        [theme.breakpoints.up('sm')]: {
            width: 100,
            height: 100
        },
    },

    disable: {
        minWidth: '100%',
        pointerEvents: "none",
        cursor: "default",
        opacity: "0.5"
    }
}));

const ItemDiscountSelected = ({ item, onDelete }) => {
    const classes = useStyles();
    return (
        <Card style={{ "marginTop": "12px", "filter": "drop-shadow(rgba(0, 0, 0, 0.15) 0px 1px 3px)" }} className={classes.root}>
            <Grid container style={{ "display": "flex", "flexDirection": "row", "justifyContent": "center" }}>
                <Grid item xs={3} style={{ "display": "flex", "alignItems": "center" }}>
                    <img src={image} className={classes.img}></img>
                </Grid>
                <Grid item xs={6} style={{ "display": "flex", "alignItems": "center" }}>
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            {`${item.discounts} ${formatUnit(item.unit)}`}
                        </Typography>
                        <Typography variant="body1" component="h2">
                            HSD : {moment(item.expire_date).format('DD-MM-YYYY')}
                        </Typography>
                    </CardContent>
                </Grid>
                <Grid item xs={3} style={{ "display": "flex", "alignItems": "center" }}>
                    <IconButton color="primary" onClick={onDelete} aria-label="delete">
                        <DeleteIcon />
                    </IconButton>
                </Grid>
            </Grid>
        </Card>
    );
};
export default ItemDiscountSelected;

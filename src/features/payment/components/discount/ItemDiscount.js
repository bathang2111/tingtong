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

const ItemDiscount = ({ item, onSelect, selected }) => {
    const classes = useStyles();

    const is_expire = moment(item.expire_date).toDate().getTime() < moment();
    const status = item.status == 1 ? true : false;
    return (
        <Card style={{ "border": `${selected ? "1px solid #2f8c92" : ""}`, "marginTop": "12px", "filter": "drop-shadow(rgba(0, 0, 0, 0.15) 0px 1px 3px)" }} className={is_expire || status ? classes.disable : classes.root}>
            <CardActionArea style={{ "display": "flex", "flexDirection": "row", "justifyContent": "center" }} onClick={() => onSelect(item)}>
                <Grid container>
                    <Grid item xs={3} style={{ "display": "flex", "alignItems": "center" }}>
                        <img src={image} className={classes.img}></img>
                    </Grid>
                    <Grid item xs={9} style={{ "display": "flex", "alignItems": "center" }}>
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                {`${item.discounts} ${formatUnit(item.unit)}`}
                            </Typography>
                            <Typography variant="body1" component="p">
                                {item.description}
                            </Typography>
                            <Typography variant="body1" component="h2">
                                HSD : {moment(item.expire_date).format('DD-MM-YYYY')}
                            </Typography>
                            {item.status == 1 ? <Typography variant="body1" color="primary" component="h2">
                                Đã sử dụng
                            </Typography> : <></>}
                            {is_expire ? <Typography variant="body1" color="primary" component="h2">
                                Đã hết hạn
                            </Typography> : <></>}
                        </CardContent>
                    </Grid>
                </Grid>
            </CardActionArea>
        </Card>
    );
};
export default ItemDiscount;

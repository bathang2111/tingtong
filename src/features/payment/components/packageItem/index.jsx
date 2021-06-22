import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import image from '../../../../assets/images/imageCapGold.png';

const useStyles = makeStyles({
  root: {
    width: '100'
  },
});

const PaymentItem = ({ item }) => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="140"
          image={image}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Gói {item.time} giờ
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Giá : {item.price}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};
export default PaymentItem;

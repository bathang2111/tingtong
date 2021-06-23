import React, { useEffect, useState } from "react";
import Header from "../../components/header/header";
import Footer from "../../components/footer/index";
import { makeStyles, Typography, Box } from "@material-ui/core";
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { Container, Grid, Button, Link } from "@material-ui/core";
import ContainerPackage from "./components/ContainerPackage";
import momo from '../../assets/images/momo.svg';
import vnppay from '../../assets/images/vnpay.svg';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },

  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    margin: theme.spacing(2)
  },

  paperTotal: {
    padding: theme.spacing(2),
    color: theme.palette.text.secondary,
    margin: theme.spacing(2)
  },

  containerPackage: {
    marginTop: theme.spacing(2)
  },

  itemTotal: {
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row'
  },

  option: {
    fontSize: 15,
    '& > span': {
      marginRight: 10,
      fontSize: 18,
    },
  },

}));

const packages = [
  {
    id: 1,
    time: 1,
    price: 200000
  },
  {
    id: 2,
    time: 2,
    price: 300000
  },
  {
    id: 3,
    time: 3,
    price: 400000
  },
  {
    id: 4,
    time: 4,
    price: 500000
  },
  {
    id: 5,
    time: 5,
    price: 600000
  },
  {
    id: 6,
    time: 6,
    price: 700000
  }
]

const discounts = [
  {
    id: 1,
    type: 1,
    discount: 20000,
    isExpire: false,
    description: "Donald Trieu 1"
  },
  {
    id: 2,
    type: 1,
    discount: 30000,
    isExpire: false,
    isStatus: false,
    description: "Donald Trieu 1"
  },
  {
    id: 3,
    type: 2,
    discount: 30000,
    isExpire: false,
    isStatus: false,
    description: "Donald Trieu 1"
  },
  {
    id: 4,
    type: 2,
    discount: 40000,
    isExpire: false,
    isStatus: false,
    description: "Donald Trieu 1"
  },
  {
    id: 5,
    type: 2,
    discount: 40000,
    isExpire: false,
    isStatus: false,
    description: "Donald Trieu 1"
  },
  {
    id: 6,
    type: 2,
    discount: 40000,
    isExpire: false,
    isStatus: false,
    description: "Donald Trieu 1"
  }
]

// From https://bitbucket.org/atlassian/atlaskit-mk-2/raw/4ad0e56649c3e6c973e226b7efaeb28cb240ccb0/packages/core/select/src/data/countries.js
const methodPayments = [
  { image: vnppay, label: 'VNPAY' },
  { image: momo, label: 'MOMO' },
];

const Payment = (props) => {
  const classes = useStyles();
  const [estimate, setEstimate] = useState(0);
  const [discount, setDiscount] = useState(0);
  const [total, setTotal] = useState(0);
  const [packageSelected, setPackageSelected] = useState({});
  const [discountSelected, setDiscountSelected] = useState({});

  const onHandleSelectPackage = data => {
    console.log(data);
    setPackageSelected(data);
  }

  const onHandleSelectDiscount = discount => {
    setDiscountSelected(discount);
  }



  return (
    <>
      <Header></Header>
      <div className={classes.root}>
        <Container className={classes.container}>
          <Grid container
            direction="row"
            justify="center">
            <Grid item xs={12} md={8}>
              <Paper className={classes.paper}>
                <Typography variant="h4" component="h2">
                  Chọn gói đăng ký
                </Typography>
                <Box className={classes.containerPackage}>
                  <ContainerPackage packageSelected={packageSelected} packages={packages} onSelect={onHandleSelectPackage}></ContainerPackage>
                </Box>
              </Paper>
            </Grid>
            <Grid item xs={12} md={4}>
              <Paper className={classes.paperTotal}>
                <Typography variant="body1" component="h2">TingTong Khuyến Mãi</Typography>
                <Link style={{ "marginTop": "12px" }} component="button" variant="body2" onClick={() => {
                  console.info("I'm a button.");
                }}>Chọn Khuyến Mại</Link>
              </Paper>
              <Paper className={classes.paperTotal}>
                <div className={classes.itemTotal}>
                  <Typography variant="body1" component="h2">Tạm tính</Typography>
                  <Typography variant="body1" component="h2">0</Typography>
                </div>
                <div className={classes.itemTotal}>
                  <Typography variant="body1" component="h2">Giảm giá</Typography>
                  <Typography variant="body1" component="h2">0</Typography>
                </div>
                <div className={classes.itemTotal}>
                  <Typography variant="body1" component="h2">Tổng</Typography>
                  <Typography variant="body1" component="h2">0</Typography>
                </div>
                <Typography style={{ "marginTop": "12px" }} variant="body1" component="h2">Chọn phương thức thanh toán</Typography>

                <Autocomplete
                  style={{ "marginTop": "12px", "marginBottom": "12px" }}
                  id="method-payment-select"
                  size="small"
                  fullWidth
                  options={methodPayments}
                  classes={{
                    option: classes.option,
                  }}
                  autoHighlight
                  getOptionLabel={(option) => option.label}
                  renderOption={(option) => (
                    <React.Fragment>
                      <img style={{ "maxWidth": "25px", "maxHeight": "25px", "marginRight": "5px" }} src={option.image}></img>
                      {option.label}
                    </React.Fragment>
                  )}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      label="Chọn một phương thức"
                      variant="outlined"
                      inputProps={{
                        ...params.inputProps,
                        autoComplete: 'new-password', // disable autocomplete and autofill
                      }}
                    />
                  )}
                />

                <Button fullWidth variant="contained" color="primary">
                  Thanh Toán
                </Button>
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </div>
      <Footer></Footer>
    </>
  );
};
export default Payment;

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
import banks from './data';
import PaymentApi from "../../api/paymentApi";
import DiscountDialog from "./components/discount/DiscountDialog";
import { formatNumber } from "../../utils/unitUtils";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useHistory } from "react-router-dom";
import ItemDiscountSelected from "./components/discount/ItemDiscountSelected";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    height: "100vh"
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

const Payment = (props) => {
  const classes = useStyles();
  const [estimate, setEstimate] = useState(formatNumber(0, 'vnd'));
  const [discount, setDiscount] = useState(formatNumber(0, 'percent'));
  const [total, setTotal] = useState(formatNumber(0, 'vnd'));
  const [packageSelected, setPackageSelected] = useState(null);
  const [discountSelected, setDiscountSelected] = useState(null);
  const [openDiscountDialog, setOnCloseDiscountDialog] = useState(false);
  const [bankCode, setBankCode] = useState(banks[0]);
  const [packageTime, setPackageTime] = useState();

  const history = useHistory();

  useEffect(() => {
    getTimePackage();
  }, [])

  useEffect(() => {
    onOperator();
  }, [discountSelected, packageSelected]);

  const getTimePackage = () => {
    try {
      PaymentApi.GetAllPackage().then(res => {
        setPackageTime(res);
      })
    } catch (error) {

    }
  }

  const onHandleSelectPackage = data => {
    setPackageSelected(data);
  }

  const onHandleSelectDiscount = discount => {
    setDiscountSelected(discount ? discount : null);
    setOnCloseDiscountDialog(!openDiscountDialog);
  }

  const onCloseDiscountDialog = () => {
    setOnCloseDiscountDialog(!openDiscountDialog);
  }

  const handleSelectDataSet = (data) => {
    console.log(data);
    setBankCode(data);
  }

  const onHandleDelete = data => {
    setDiscountSelected(null);
  }

  const onOperator = () => {
    let _count = 0;
    let _estimate = packageSelected ? packageSelected.price : 0;
    let _discount = discountSelected ? discountSelected.discounts : 0;
    if (discountSelected && discountSelected.unit == 'percent') {
      _count = _estimate - (_discount / 100) * _estimate
    } else {
      _count = _estimate;

    }
    setTotal(formatNumber(_count, 'vnd'));
    setEstimate(formatNumber(_estimate, 'vnd'));
    setDiscount(formatNumber(_discount, (discountSelected ? discountSelected.unit : 'vnd')));
  }

  const handleSubmit = async () => {
    if (!packageSelected || !bankCode) {
      toast.error('Vui lòng chọn gói đăng ký và ngân hàng để thanh toán', {
        position: "top-right",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } else {
      const body = {
        bankCode: bankCode.label,
        timePackageId: packageSelected.id,
        promotionId: discountSelected ? discountSelected.promotion_id : ""
      }
      if (!discountSelected) {
        delete body.promotionId
      }
      try {
        PaymentApi.CreateLinkVnPay(body).then(res => {
          console.log(res);
          window.location.replace(res.payment_url)
        }).catch(err => {
          toast.error('Thanh toán thất bại', {
            position: "top-right",
            autoClose: 1500,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        })
      } catch (error) {
        toast.error('Thanh toán thất bại', {
          position: "top-right",
          autoClose: 1500,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      }
    }
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
                  Thanh toán
                </Typography>
                <Box className={classes.containerPackage}>
                  <ContainerPackage packageSelected={packageSelected} packages={packageTime} onSelect={onHandleSelectPackage}></ContainerPackage>
                </Box>
              </Paper>
            </Grid>
            <Grid item xs={12} md={4}>
              <Paper className={classes.paperTotal}>
                <Typography variant="body1" component="h2">TingTong Khuyến Mãi</Typography>

                {discountSelected && <ItemDiscountSelected item={discountSelected} onDelete={onHandleDelete}></ItemDiscountSelected>}
                <Link style={{ "marginTop": "12px" }} component="button" variant="body2" onClick={() => {
                  setOnCloseDiscountDialog(!openDiscountDialog)
                }}>Chọn Khuyến Mại</Link>
              </Paper>
              <Paper className={classes.paperTotal}>
                <div className={classes.itemTotal}>
                  <Typography variant="body1" component="h2">Tạm tính</Typography>
                  <Typography variant="body1" component="h2">{estimate}</Typography>
                </div>
                <div className={classes.itemTotal}>
                  <Typography variant="body1" component="h2">Giảm giá</Typography>
                  <Typography variant="body1" component="h2">{discount}</Typography>
                </div>
                <div className={classes.itemTotal}>
                  <Typography variant="body1" component="h2">Tổng</Typography>
                  <Typography variant="body1" component="h2">{total}</Typography>
                </div>
                <Typography style={{ "marginTop": "12px" }} variant="body1" component="h2">Phương thức thanh toán</Typography>

                <div style={{ "marginTop": "12px", "display": "flex", "justifyContent": "center" }}>
                  <img style={{ "maxWidth": "50px", "maxHeight": "50px" }} src={vnppay}></img>
                </div>

                <Autocomplete
                  style={{ "marginTop": "12px", "marginBottom": "12px" }}
                  id="method-payment-select"
                  size="small"
                  fullWidth
                  options={banks}
                  classes={{
                    option: classes.option,
                  }}
                  autoHighlight
                  getOptionLabel={(option) => option.value}
                  value={bankCode}
                  onChange={(event, newValue) => {
                    handleSelectDataSet(newValue);
                  }}
                  renderOption={(option) => (
                    <React.Fragment>
                      <Typography variant="body2" component="h2">{option.value}</Typography>
                    </React.Fragment>
                  )}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      label="Chọn một ngân hàng hoặc ví"
                      variant="outlined"
                      inputProps={{
                        ...params.inputProps,
                        autoComplete: 'new-password', // disable autocomplete and autofill
                      }}
                    />
                  )}
                />

                <Button onClick={() => handleSubmit()} fullWidth variant="contained" color="primary">
                  Thanh Toán
                </Button>
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </div>
      <Footer></Footer>

      <DiscountDialog open={openDiscountDialog} onClose={onCloseDiscountDialog} selected={discountSelected} onSelect={onHandleSelectDiscount}></DiscountDialog>
      <ToastContainer
        position="top-right"
        autoClose={1500}
        hideProgressBar={true}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </>
  );
};
export default Payment;

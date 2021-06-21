import React, { useEffect, useState } from "react";
import PaymentMethod from "./components/paymentMethod";
import DisCount from "./components/discount";
import TimePackage from "./components/timePackage/index.jsx";
import * as SC from "./style.js";
import Header from "../../components/header/header";
import Footer from "../../components/footer/index";
import { makeStyles, Typography } from "@material-ui/core";
import Paper from '@material-ui/core/Paper';
import { Container } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    height: '100vh'
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    margin: theme.spacing(2)
  },
}));

const Payment = (props) => {
  const classes = useStyles();

  return (
    <>
      <Header></Header>
      <div className={classes.root}>
        <Container className={classes.container}>
          <Paper className={classes.paper}>
              <Typography variant="h4" component="h2">
                Chọn gói đăng ký
              </Typography>
          </Paper>
        </Container>
      </div>
      <Footer></Footer>
    </>
  );
};
export default Payment;

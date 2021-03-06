import axiosClien, { getAPI, postAPI } from "./axiosClient";

const PaymentApi = {
  CreateLinkVnPay: (body) => {
    const url = "/payments/vnpay/payment-url";
    return postAPI(url, body)
  },

  GetAllPromotion: () => {
    return getAPI("/promotion-details");
  },

  GetAllPackage: () => {
    return getAPI('/time-packages');
  },

  VerifiedPayment: (params) => {
    return getAPI(`/payments/vnpay/return${params}`)
  },

  PaymentHistory: (limit, page) => {
    return getAPI(`students/payment-histories?limit=${limit}&page=${page}`)
  }
};

export default PaymentApi;

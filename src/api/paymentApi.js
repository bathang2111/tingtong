import axiosClien from "./axiosClient";

const PaymentApi = {
  CreateLinkVnPay: (params) => {
    const url = "/payments/vnpay/payment-url";
    return axiosClien.post(url, params);
  },
};

export default PaymentApi;

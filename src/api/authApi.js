import axiosClien from "./axiosClient";

const AuthApi = {
  Login: (params) => {
    const url = "/auth/login";
    return axiosClien.post(url, params);
  },
  SignUp: (params) => {
    const url = "/auth/register";
    return axiosClien.post(url, params);
  },
};

export default AuthApi;

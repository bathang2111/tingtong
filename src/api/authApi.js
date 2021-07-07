import axiosClien, { postAPI } from "./axiosClient";

const AuthApi = {
  Login: (params) => {
    const url = "/auth/login";
    return postAPI(url, params);
  },
  LoginWithGoogle: (params) => {
    const url = "/auth/google";
    return postAPI(url, params);
  },
  SignUp: (params) => {
    const url = "/auth/register";
    return axiosClien.post(url, params);
  },
  getUserInfo: () => {
    const url = "/students";
    return axiosClien.get(url);
  },
  UpdateUserInfo: (params) => {
    const url = "students";
    return axiosClien.put(url, params);
  },
};

export default AuthApi;

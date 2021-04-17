import axiosClien from "./axiosClient";

const CallVideoApi = {
  RequestCallVideo: (params) => {
    const url = `/tutors/${params}/call`;
    return axiosClien.post(url);
  },
};  
export default CallVideoApi;

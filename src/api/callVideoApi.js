import axiosClien from "./axiosClient";

const CallVideoApi = {
  RequestCallVideo: (params) => {
    const url = `/video-rooms`;
    return axiosClien.post(url,params);
  },
};  
export default CallVideoApi;

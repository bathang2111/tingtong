import axiosClien, { getAPI } from "./axiosClient";

const CallVideoApi = {
  RequestCallVideo: (params) => {
    const url = `/video-rooms`;
    return axiosClien.post(url,params);
  },

  GetAllHistories: (limit, page) => {
    return getAPI(`/students/video-rooms?limit=${limit}&page=${page}`);
  }
};  
export default CallVideoApi;

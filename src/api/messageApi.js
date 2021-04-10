import axiosClien from "./axiosClient";

const MessageApi = {
  CreateRoom: (params) => {
    const url = "/rooms";
    return axiosClien.post(url, params);
  },
  GetAllRoom: () => {
    const url = "/room-histories";
    return axiosClien.get(url);
  },
  GetContentMessage: (params) => {
    const url = "/messages";
    return axiosClien.get(url, { params: { "roomID": params } });
  },
};

export default MessageApi;

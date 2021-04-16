import axiosClien from "./axiosClient";

const FeedBackApi = {
  postFeedBack: (params, body) => {
    const url = `/tutors/${params}/review`;
    return axiosClien.post(url, body);
  },
};
export default FeedBackApi;

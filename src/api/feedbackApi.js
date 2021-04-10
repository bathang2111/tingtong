import axiosClien from "./axiosClient";

const FeedBackApi = {
  postFeedBack: (params) => {
    const url = `/tutors/${params}/review`;
    return axiosClien.post(url);
  },
};
export default FeedBackApi;

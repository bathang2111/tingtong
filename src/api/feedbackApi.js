import axiosClien from "./axiosClient";

const FeedBackApi = {
  postFeedBack: (params, body) => {
    const url = `/tutors/${params}/review`;
    return axiosClien.post(url, body);
  },
  likeTutor:(params)=>{
    const url=`/students/tutors/${params}/like`
    return axiosClien.post(url);
  },
  likeCourse:(params)=>{
    const url=`/students/courses/${params}/like`
    return axiosClien.post(url);
  }
};
export default FeedBackApi;

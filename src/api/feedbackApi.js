import axiosClien from "./axiosClient";

const FeedBackApi = {
  postFeedBack: (params, body) => {
    const url = `/tutors/${params}/reviews`;
    return axiosClien.post(url, body);
  },
  likeTutor: (params) => {
    const url = `/students/tutors/${params}/like`;
    return axiosClien.post(url);
  },
  unlikeTutor: (params) => {
    const url = `/students/tutors/${params}/unlike`;
    return axiosClien.put(url);
  },
  likeCourse: (params) => {
    const url = `/students/courses/${params}/like`;
    return axiosClien.post(url);
  },
  unlikeCourse: (params) => {
    const url = `/students/courses/${params}/unlike`;
    return axiosClien.put(url);
  },
  GetTutorReview: (params) => {
    const url = `/tutors/${params}/reviews`;
    return axiosClien.get(url);
  },
};
export default FeedBackApi;

import axiosClien from "./axiosClient";

const TutorsApi = {
  getTutors: () => {
    const url = "/tutors";
    return axiosClien.get(url);
  },
  getTutorDetail: (params) => {
    const url = `tutors/${params}`;
    return axiosClien.get(url);
  },
  getTutorsByKeyWord: (params) => {
    const url = `tutors?keyword=${params}`;
    return axiosClien.get(url);
  },
};

export default TutorsApi;

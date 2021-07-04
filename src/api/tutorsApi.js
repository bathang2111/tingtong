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
    const url = `/tutors/searches?q=${params}`;
    return axiosClien.get(url);
  },
  ReportTutor: (params, body) => {
    const url = `/students/tutors/${params}/reports`;
    return axiosClien.post(url, body);
  },
};

export default TutorsApi;

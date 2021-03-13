import axiosClien from "./axiosClient";

const TutorsApi = {
  getTutors: () => {
    const url = "/tutors";
    return axiosClien.get(url);
  },
  getTutorDetail:(param)=>{
    const url=`tutors/${param}`;
    return axiosClien.get(url)
}
};

export default TutorsApi;

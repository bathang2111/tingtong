import axiosClien from "./axiosClient";

const CurriculumsApi = {
  getCurriculums: () => {
    const url = "/curriculums";
    return axiosClien.get(url);
  },
  getCourseDetail: (params) => {
    const url = `courses/${params}`;
    return axiosClien.get(url);
  },
  getLessonDetail: (params) => {
    const url = `lessons/${params}`;
    return axiosClien.get(url);
  },
  getCoursesByKeyWord: (params) => {
    const url = `courses?keyword=${params}`;
    return axiosClien.get(url);
  },
};
export default CurriculumsApi;

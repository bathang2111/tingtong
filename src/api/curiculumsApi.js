import axiosClien from "./axiosClient";

const CurriculumsApi = {
  getCurriculums: () => {
    const url = "/curriculums";
    return axiosClien.get(url);
  },
  getCourseDetail: (params) => {
    const url = `/courses/${params}`;
    return axiosClien.get(url);
  },
  getLessonDetail: (params) => {
    const url = `/courses/${params.courseId}/lessons/${params.idLesson}`;
    return axiosClien.get(url);
  },
  getCoursesByKeyWord: (params) => {
    const url = `/courses/searches?q=${params}`;
    return axiosClien.get(url);
  },
};
export default CurriculumsApi;

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
  },KeyWord: (params) => {
    const url = `/courses/searches?q=${params}`;
    return axiosClien.get(url);
  },
  ReportCourse: (params, body) => {
    const url = `/students/courses/${params}/reports`;
    return axiosClien.post(url, body);
  },
  EnroollCourse: (params) => {
    const url = `/students/courses/${params}`;
    return axiosClien.post(url);
  },
};
export default CurriculumsApi;

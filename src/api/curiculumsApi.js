import axiosClien, { getAPI } from "./axiosClient";

const CurriculumsApi = {
  getCurriculums: (limit, page) => {
    const url = `/curriculums?limit=${limit}&page=${page}`;
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

  getListCurriculums: () => {
    const url = "/curriculums/list";
    return getAPI(url);
  },

  getCourseByCurriculumsID: (id, limit, page) => {
    const url = `/curriculums/${id}/course?limit=${limit}&page=${page}`;
    return getAPI(url);
  },

  ReportCourse: (params, body) => {
    const url = `/students/courses/${params}/reports`;
    return axiosClien.post(url, body);
  },
  EnroollCourse: (params) => {
    const url = `/students/courses/${params}`;
    return axiosClien.post(url);
  },
  getCoursesEnroll:()=>{
    const url = `/students/courses`;
    return axiosClien.get(url);
  }
};
export default CurriculumsApi;

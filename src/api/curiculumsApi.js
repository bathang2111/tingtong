import axiosClien from "./axiosClient";

const CurriculumsApi={
    getCurriculums:()=>{
        const url='/curriculums';
        return axiosClien.get(url);
    },
    getCourseDetail:(param)=>{
        const url=`courses/${param}`;
        return axiosClien.get(url)
    }
}
export default CurriculumsApi;
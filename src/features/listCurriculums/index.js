import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Grid, Paper, Typography } from '@material-ui/core';
import ContainerCurriculums from './components/ContainerCurriculums';
import ContainerCourse from './components/ContainerCourse';
import CuriculumsApi from '../../api/curiculumsApi'
import { useHistory, useRouteMatch } from 'react-router-dom';
import Footer from "../../components/footer";
import Header from "../../components/header/header";
import * as SC from "./style.js";
import { makeStyles } from '@material-ui/core/styles';
import SearchCourse from "../listCourses/components/searchCourse";

ListCurriculums.propTypes = {

};

const useStyles = makeStyles((theme) => ({
    paper: {
        width: '100%',
        backgroundColor: theme.palette.background.paper,
    },

    curriculums: {
        marginTop: theme.spacing(2)
    },

    no_content: {
        display: 'flex',
        justifyContent: 'center',
        marginTop: theme.spacing(2)
    }
}));

function ListCurriculums(props) {

    const match = useRouteMatch();
    const { params } = match;
    const classes = useStyles();
    const [curriculums, setCurricumlums] = useState([]);
    const [courses, setCourses] = useState([]);
    const [page, setPage] = useState(1);
    const [limit, setLimit] = useState(20);
    const [total, setTotalPage] = useState(1);

    useEffect(() => {
        getCurriculums();
    }, []);

    useEffect(() => {
        console.log("Params thay doi");
        setPage(1);
    }, [params])

    useEffect(() => {
        console.log("GET CURRICULUM");
        getCourseByCurriculumsID(params.id, limit, page)
    }, [page, params])

    const getCurriculums = async () => {
        CuriculumsApi.getListCurriculums().then(res => {
            console.log(res);
            setCurricumlums(res);
        }).catch(err => {

        })
    }

    const getCourseByCurriculumsID = async (id, limit, page) => {
        CuriculumsApi.getCourseByCurriculumsID(id, limit, page).then(res => {
            console.log(res);
            setCourses(res.list);
            setTotalPage(res.totalPages);
        }).catch(err => {

        })
    }

    const handleOnChange = (event, value) => {
        setPage(value);
    };

    return (
        <div>
            <Header />
            <SearchCourse />
            <SC.Container>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={3} className={classes.curriculums}>
                        <Paper variant="outlined">
                            <ContainerCurriculums curriculums={curriculums}></ContainerCurriculums>
                        </Paper>
                    </Grid>

                    <Grid item xs={12} md={9}>
                       {courses && courses.length > 0 && <ContainerCourse courses={courses} page={page} totalPage={total} onChangePage={handleOnChange}></ContainerCourse>}
                       {courses && courses.length <= 0 && <Typography className={classes.no_content} variant="body1" color="black" component="p">Không có dữ liệu</Typography>}
                    </Grid>
                </Grid>
            </SC.Container>
            <Footer />
        </div>
    );
}

export default ListCurriculums;
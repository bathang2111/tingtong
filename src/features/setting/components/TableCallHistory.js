import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import Chip from '@material-ui/core/Chip';
import CallVideoApi from '../../../api/callVideoApi';
import moment from 'moment';
import { get, pick, findIndex } from 'lodash';

const formatSecond = (s) => {
    return new Date(s).toISOString().substr(11, 8);
};

const columns = [
    { id: 'id', label: 'ID', minWidth: 170 },
    {
        id: 'startAt',
        label: 'Bắt đầu',
        minWidth: 170,
        align: 'center',
        format: (value) => moment(value).format("DD-MM-YYYY, h:mm:ss a"),
    },
    {
        id: 'endAt',
        label: 'Kết thúc',
        minWidth: 170,
        align: 'center',
        format: (value) => moment(value).format("DD-MM-YYYY, h:mm:ss a"),
    },
    {
        id: 'callingTime',
        label: 'Tổng thời gian',
        minWidth: 170,
        align: 'center',
        format: (value) => formatSecond(value)
    },
    {
        id: 'users',
        label: 'Giáo viên',
        minWidth: 170,
        align: 'center',
    },
    {
        id: 'recordingVideoUrl',
        label: 'Ghi hình',
        minWidth: 170,
        align: 'center',
    },
];

const useStyles = makeStyles({
    root: {
        width: '100%',
    },
    container: {
        maxHeight: 440,
    },
});

export const renderStatusStyle = status => {
    switch (status) {
        case 1:
            return {
                backgroundColor: '#27CB10',
                color: '#ffffff',
                padding: '5px',
            };
        case 0:
            return {
                backgroundColor: '#F11414',
                color: '#ffffff',
                padding: '5px',
            };
        default:
            return {
                backgroundColor: 'white',
                color: 'black',
                padding: '5px',
            };
    }
};

const getStatus = (status) => {
    return status == 0 ? 'Thất bại' : 'Thành công';
};

export default function TableCallHistory() {
    const classes = useStyles();
    const [page, setPage] = React.useState(1);
    const [rowsPerPage, setRowsPerPage] = React.useState(100);
    const [totalPage, setTotalPage] = useState(1);
    const [calls, setCalls] = useState([]);

    useEffect(() => {
        getPaymentHistories(rowsPerPage, page);
    }, [page, rowsPerPage])

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    const getPaymentHistories = (limit, page) => {
        try {
            CallVideoApi.GetAllHistories(limit, page).then(res => {
                setCalls(res.list)
                setTotalPage(res.totalPages);
            }).catch(err => {

            })
        } catch (error) {

        }
    }

    return (
        <Paper className={classes.root}>
            <TableContainer className={classes.container}>
                <Table stickyHeader aria-label="sticky table">
                    <TableHead>
                        <TableRow>
                            {columns.map((column) => (
                                <TableCell
                                    key={column.id}
                                    align={column.align}
                                    style={{ minWidth: column.minWidth }}
                                >
                                    {column.label}
                                </TableCell>
                            ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {calls.map((row) => {
                            return (
                                <TableRow hover role="checkbox" tabIndex={-1} key={row.id}>
                                    {columns.map((column) => {
                                        const value = row[column.id];
                                        if (column.id == "users") {
                                            const index = value ? findIndex(value, function (o) { return o.role == 1; }) : 0;
                                            const tutor = value[index];
                                            return (
                                                <TableCell key={column.id} align={column.align}>
                                                    {tutor ? tutor['firstName'] + " " + tutor['lastName'] : ''}
                                                </TableCell>
                                            )
                                        }
                                        return (
                                            <TableCell key={column.id} align={column.align}>
                                                {column.format ? column.format(value) : value}
                                            </TableCell>
                                        );
                                    })}
                                </TableRow>
                            );
                        })}
                    </TableBody>
                </Table>
            </TableContainer>
            <TablePagination
                rowsPerPageOptions={[10, 25, 100]}
                component="div"
                count={totalPage}
                rowsPerPage={rowsPerPage}
                page={page}
                onChangePage={handleChangePage}
                onChangeRowsPerPage={handleChangeRowsPerPage}
            />
        </Paper>
    );
}
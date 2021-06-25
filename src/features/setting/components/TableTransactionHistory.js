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
import PaymentApi from '../../../api/paymentApi';
import moment from 'moment';

const columns = [
  { id: 'id', label: 'ID', minWidth: 170 },
  { id: 'timePackage', label: 'Gói', minWidth: 100 },
  {
    id: 'status',
    label: 'Trạng thái',
    minWidth: 170,
    align: 'center',
  },
  {
    id: 'createdAt',
    label: 'Ngày tạo',
    minWidth: 170,
    align: 'right',
    format: (value) => moment(value).format("DD-MM-YYYY"),
  },
  {
    id: 'updatedAt',
    label: 'Ngày cập nhật',
    minWidth: 170,
    align: 'right',
    format: (value) => moment(value).format("DD-MM-YYYY"),
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

export default function TableTransactionHistory() {
  const classes = useStyles();
  const [page, setPage] = React.useState(1);
  const [rowsPerPage, setRowsPerPage] = React.useState(100);
  const [totalPage, setTotalPage] = useState(1);
  const [payments, setPayments] = useState([]);

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
      PaymentApi.PaymentHistory(limit, page).then(res => {
        setPayments(res.list)
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
            {payments.map((row) => {
              return (
                <TableRow hover role="checkbox" tabIndex={-1} key={row.id}>
                  {columns.map((column) => {
                    const value = row[column.id];
                    if (column.id == "timePackage") {
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {value['name']}
                        </TableCell>
                      )
                    } else if (column.id == "status") {
                      return (
                        <TableCell align="center">
                          <Chip
                            size="small"
                            label={getStatus(value)}
                            style={renderStatusStyle(value)}
                          />
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
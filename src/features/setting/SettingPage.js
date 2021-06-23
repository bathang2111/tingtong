import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import SettingDrawer from './components/SettingDrawer';
import { Redirect, Route, Switch, useLocation, useHistory } from 'react-router-dom';
import UserProfilePage from './pages/UserProfilePage';
import CallHistoryPage from './pages/CallHistoryPage';
import TransactionHistoryPage from './pages/TransactionHistoryPage';
import AuthRouter from '../../app/AuthRouter';
import Footer from "../../components/footer";
import Header from "../../components/header/header";
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { colors } from '@material-ui/core';

SettingPage.propTypes = {

};
const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        height: '100vh'
    },
    toolbar: {
        display: 'flex',
        justifyContent: 'flex-end',
        paddingRight: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
    },
}));

function SettingPage(props) {
    const classes = useStyles();
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);

    return (
        <div>
            <Header></Header>
            <div className={classes.root}>
                <div className={classes.toolbar}>
                    <SettingDrawer open={open} onClose={() => setOpen(!open)}>
                    </SettingDrawer>
                </div>
                <main className={classes.content}>
                    <Switch>
                        <AuthRouter component={UserProfilePage} path="/setting/user-profile" />
                        <AuthRouter component={CallHistoryPage} path="/setting/call-history" />
                        <AuthRouter component={TransactionHistoryPage} path="/setting/transaction-history" />
                        <Route path="/setting">
                            <Redirect to="/setting/user-profile" />
                        </Route>
                    </Switch>
                </main>
            </div>
            <Footer></Footer>
        </div>
    );
}

export default SettingPage;
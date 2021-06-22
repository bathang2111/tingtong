import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";

const AuthRouter = ({ component: Component, ...rest }) => {
    const isLogin = useSelector((state) => state.login.checkLogin);
    return (
        isLogin ? (
            <Route>
                <Component path={rest.path} />
            </Route>
        ) : (
            <Redirect to="/login" />
        )
    )
}

export default AuthRouter
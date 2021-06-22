import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import PropTypes from 'prop-types';

const renderMergedProps = (component, ...rest) => {
    const finalProps = Object.assign({}, ...rest);
    return React.createElement(component, finalProps);
};

const AuthRouter = ({ component: Component, ...rest }) => {
    const isLogin = useSelector((state) => state.login.checkLogin);
    return (
        isLogin ? (
            <Route
                {...rest}
                render={(props) =>
                    renderMergedProps(Component, props, rest)
                }>
            </Route >
        ) : (
            <Redirect to="/login" />
        )
    )
}

AuthRouter.propTypes = {
    component: PropTypes.oneOfType([PropTypes.elementType, PropTypes.node])
};

export default AuthRouter
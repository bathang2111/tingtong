import React from 'react';
import PropTypes from 'prop-types';
import 'features/forgetPassword/style.scss';
import TypeEmail from './pages/TypeEmail/TypeEmail';
import logo from '../../assets/images/logo.svg';
import ChangePassword from './pages/ChangePassword/ChangePassword';

ForgetPassword.propTypes = {

};

function ForgetPassword(props) {
    return (
        <div className="forgetPassword">
            <img src={logo}></img>
            {/* <TypeEmail></TypeEmail> */}
            <ChangePassword></ChangePassword>
        </div >
    );
}

export default ForgetPassword;
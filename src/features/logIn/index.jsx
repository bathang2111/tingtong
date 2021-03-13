import React from 'react';
import PropTypes from 'prop-types';
import Background from '../../components/background';
import * as SC from './style' 
import logo from '../../assets/images/logo.svg';
import FormLogInAnotherAccount from './components/FormAnother';
import FormLogIn from './components/FormLogIn';
import FooterLogIn from './components/FooterLogIn';

LogIn.propTypes = {

};

function LogIn(props) {
    return (
        <div>
            <Background></Background>
            <SC.Container>
                <SC.Logo>
                    <img src={logo} />
                </SC.Logo>
                <SC.FormLogin>
                    <FormLogIn></FormLogIn>
                    <FormLogInAnotherAccount></FormLogInAnotherAccount>
                    <FooterLogIn></FooterLogIn>
                </SC.FormLogin>
            </SC.Container>
        </div>
    );
}

export default LogIn;
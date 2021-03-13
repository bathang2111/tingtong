import React from 'react';
import PropTypes from 'prop-types';
import 'features/forgetPassword/components/FormTypeEmail/FormTypeEmail.scss';

FormTypeEmail.propTypes = {

};

function FormTypeEmail(props) {
    return (
        <div className="backgroundCardFgPw">
            <form>
                <div className="containerFgPw">
                    <div id="titleFgPw">Forget Password</div>
                    <div id="typeEmailTxt">Type email</div>
                    <input id="inputEmailFgPw" type="text" placeholder="example@email.com" />
                    <input id="btnVerifyFgPw" type="button" value="Verify Email" />
                </div>
            </form>
        </div>
    );
}

export default FormTypeEmail;
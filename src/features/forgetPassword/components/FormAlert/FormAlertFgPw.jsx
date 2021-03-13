import React from 'react';
import PropTypes from 'prop-types';
import 'features/forgetPassword/components/FormAlert/FormAlertFgPw.scss';

FormAlertFgPw.propTypes = {

};

function FormAlertFgPw(props) {
    return (
        <div className="backgroundCardAlFgPw">
            <form>
                <div className="containerAlFgPw">
                    <div id="titleFgPw">Forget Password</div>
                    <div id="msgAlFgPw">We have sent for you an email. Please check your email and click into link in email to change your password </div>
                    <input id="btnHomePageFgPw" type="button" value="Home Page" />
                </div>
            </form>
        </div>
    );
}

export default FormAlertFgPw;
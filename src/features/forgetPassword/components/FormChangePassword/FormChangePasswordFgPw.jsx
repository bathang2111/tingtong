import React from 'react';
import PropTypes from 'prop-types';
import 'features/forgetPassword/components/FormChangePassword/FormChangePasswordFgPw.scss';


FormChangePasswordFgPw.propTypes = {

};


function FormChangePasswordFgPw(props) {
    return (
        <div className="backgroundCardChangeFgPw">
            <form>
                <div className="containerAlFgPw">
                    <div id="titleFgPw">Forget Password</div>
                    <input type="password" placeholder="new password ..." />
                    <input type="password" placeholder="new password again ..." />
                    <input id="btnHomePageFgPw" type="button" value="Change Password" />
                </div>
            </form>
        </div>
    );
}


export default FormChangePasswordFgPw;
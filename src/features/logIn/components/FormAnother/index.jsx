import React from 'react';
import PropTypes from 'prop-types';
import * as SC from './style'
import fbIcon from '../../../../assets/images/facebookIcon.svg';
import ggIcon from '../../../../assets/images/googleIcon.svg';

FormLogInAnotherAccount.propTypes = {

};

function FormLogInAnotherAccount(props) {
    return (
        <div>
            <SC.OrTxt>
                <SC.Line></SC.Line>
                <div id="OffiTextOr">OR</div>
                <SC.Line></SC.Line>
            </SC.OrTxt>
            <SC.BtnAuth id="btnGoogle">
                <SC.Img src={ggIcon}></SC.Img>
                <span>Log in with Google</span>
            </SC.BtnAuth>
            <SC.BtnAuth id="btnFacebook">
                <SC.Img src={fbIcon}></SC.Img>
                <span>Log in with Facebook</span>
            </SC.BtnAuth>

        </div>
    );
}

export default FormLogInAnotherAccount;
import React from "react";
import PropTypes from "prop-types";
import * as SC from "./style";

FooterLogIn.propTypes = {};

function FooterLogIn(props) {
  return (
    <SC.FooterLoginContainer>
      <SC.Linkk to="/signup">Sign Up</SC.Linkk>
      <SC.Linkk>Forget Password</SC.Linkk>
    </SC.FooterLoginContainer>
  );
}

export default FooterLogIn;

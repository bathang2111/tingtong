import React, { useState } from 'react';
import PropTypes from 'prop-types';
import 'features/forgetPassword/pages/TypeEmail/TypeEmail.scss';
import FormTypeEmail from 'features/forgetPassword/components/FormTypeEmail/FormTypeEmail';
import FormAlertFgPw from 'features/forgetPassword/components/FormAlert/FormAlertFgPw';

TypeEmail.propTypes = {

};

function TypeEmail(props) {
    const [isVerifyEmail, setIsVerify] = useState(true);

    return (
        <div>
            { isVerifyEmail ? <FormAlertFgPw /> : <FormTypeEmail />}
        </div>
    );
}

export default TypeEmail;
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useHistory, useRouteMatch } from 'react-router-dom';
import PaymentApi from '../../api/paymentApi';

PaymentResult.propTypes = {

};

function PaymentResult(props) {
    const history = useHistory();
    const queryString = window.location.search
    useEffect(() => {
        verifiedPayment();
    }, []);

    const verifiedPayment = async () => {
        PaymentApi.VerifiedPayment(queryString).then(res => {
            history.replace('/setting/transaction-history');
        }).catch(err => {
            history.replace('/setting/transaction-history');
        })
    }

    return (
        <div>

        </div>
    );
}

export default PaymentResult;
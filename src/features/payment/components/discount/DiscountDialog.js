import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogActions from '@material-ui/core/DialogActions';
import Button from '@material-ui/core/Button';
import PaymentApi from "../../../../api/paymentApi";
import ItemDiscount from './ItemDiscount';
DiscountDialog.propTypes = {

};

function DiscountDialog({ open, onClose, onSelect, selected }) {
    const descriptionElementRef = React.useRef(null);
    const [discount, setDiscount] = useState([]);
    const [selectedIndex, setSelectedIndex] = React.useState(selected || {});

    React.useEffect(() => {
        if (open) {
            const { current: descriptionElement } = descriptionElementRef;
            if (descriptionElement !== null) {
                descriptionElement.focus();
            }
        }
    }, [open]);

    useEffect(() => {
        getAllPromotion();
    }, []);

    const getAllPromotion = async () => {
        PaymentApi.GetAllPromotion().then(res => {
            setDiscount(res);
        }).catch(err => {

        })
    }

    const handleListItemClick = (item) => {
        setSelectedIndex(item);
    }

    const handleApplyPromotion = () => {
        onSelect(selectedIndex);
    }

    return (
        <div>
            <Dialog
                open={open}
                onClose={onClose}
                scroll="paper"
                aria-labelledby="scroll-dialog-title"
                aria-describedby="scroll-dialog-description">
                <DialogTitle id="scroll-dialog-title">Mã khuyến mãi</DialogTitle>
                <DialogContent dividers="paper">
                    <DialogContentText
                        id="scroll-dialog-description"
                        ref={descriptionElementRef}
                        tabIndex={-1}>
                        {discount && discount.map((item, index) => {
                            return <ItemDiscount key={index} item={item} onSelect={handleListItemClick} selected={selectedIndex && item.id === selectedIndex.id ? true : false}></ItemDiscount>
                        })}
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleApplyPromotion} color="primary">
                        Áp dụng
                    </Button>
                </DialogActions>
            </Dialog>
        </div >
    );
}

export default DiscountDialog;
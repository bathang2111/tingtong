import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { useState } from "react";
import CurriculumsApi from "../../../../api/curiculumsApi";
import { useRouteMatch } from "react-router-dom";

export default function ReportCourse(props, { isOpen }) {
  const match = useRouteMatch();
  const { params } = match;
  const [reason, setReason] = useState("");

  const handleChange = (e) => {
    setReason(e.target.value);
  };

  const handleReport = async () => {
    props.togglePopup(false);
    try {
      const body = { reason: reason };
      await CurriculumsApi.ReportCourse(params.id, body);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <Dialog open={props.isOpen} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Báo cáo</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Giúp chúng tôi hiểu rõ khóa học này đang gặp vấn đề gì. Bạn sẽ mô tả
            vấn đề đó như thế nào?
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Mô tả vấn đề"
            onChange={handleChange}
            type="text"
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => props.togglePopup(false)} color="primary">
            Hủy
          </Button>
          <Button onClick={handleReport} color="primary">
            Báo cáo
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

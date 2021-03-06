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

export default function Enroll(props) {
  const match = useRouteMatch();
  const { params } = match;

  const handleEnroll = async () => {
    props.togglePopup(false);
    try {
      await CurriculumsApi.EnroollCourse(params.id);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <Dialog open={props.isOpen} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Ghi danh</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Ghi danh khóa học để có thể theo dõi bất cứ lúc nào vì chúng tôi
            cung cấp nó hoàn toàn miễn phí
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => props.togglePopup(false)} color="primary">
            Hủy
          </Button>
          <Button onClick={handleEnroll} color="primary">
            Ghi danh
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

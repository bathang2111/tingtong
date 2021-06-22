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
import { Card, IconButton, makeStyles } from "@material-ui/core";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import { CardHeader } from "@material-ui/core";
import { Close } from "@material-ui/icons";
import { Typography } from "@material-ui/core";
import AllPages from "../slidePDF/allPDF";
import SinglePage from "../slidePDF/singlePDF";

const useStyles = makeStyles((theme) => ({
  root: {
    // width: 600,
    // height: 500,
    overflowY: "hidden",
  },
  title: {
    textAlign: "center",
  },
  description: {
    textAlign: "center",
  },
}));

export default function SlideShow(props) {
  const classes = useStyles();

  return (
    <Dialog
      className={classes.root}
      open={props.isOpen}
      aria-labelledby="form-dialog-title"
    >
      <DialogTitle id="form-dialog-title">Slide</DialogTitle>
      <DialogContent>
        <DialogContentText>
          <AllPages pdf={props.pdf} />
        </DialogContentText>
        <DialogContentText>
          <SinglePage pdf={props.pdf} />
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={() => props.togglePopup(false)} color="primary">
          Đóng
        </Button>
      </DialogActions>
    </Dialog>
  );
}

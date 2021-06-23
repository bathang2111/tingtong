import React from "react";
import * as SC from "./style";
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
import { useRef } from "react";
import { useEffect } from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: 0,
    background: "#e8e9ec",
    width: "100%",
    height: "100%",
  },
  title: {
    textAlign: "center",
    background: "#FFFFFF",
    // padding: 0,
  },
  description: {
    textAlign: "center",
  },
  content: {
    padding: "0 16px",
    // height: "100%",
    // display: "flex",
    justifyContent: "center",
    alignItems: "center",
    // background: "#ff0",
  },
}));

export default function SlideShow(props) {
  const classes = useStyles();
  const [sizePage, setSize] = useState(0);

  return (
    <SC.Container
      style={{
        overlay: {
          background: "rgba(0,0,0,0.4)",
          zIndex: "100",
        },
      }}
      isOpen={props.isOpen}
    >
      <Card
        ref={(el) => {
          if (!el) return;
          setSize((el.getBoundingClientRect().height - 71 - 120) * 0.85); // prints 200px
        }}
        className={classes.root}
      >
        <CardHeader
          className={classes.title}
          title={
            <Typography
              // style={{ maxWidth: 270 }}
              noWrap
              gutterBottom
              variant="h4"
              component="h2"
            >
              {props.name}
            </Typography>
          }
          action={
            <IconButton onClick={() => props.togglePopup(false)}>
              <Close />
            </IconButton>
          }
        />
        <CardContent className={classes.content}>
          <AllPages
            indexActive={props.indexActive}
            size={70}
            sizePage={sizePage}
            lobby={false}
            pdf={props.pdf}
          />
        </CardContent>
      </Card>
    </SC.Container>
  );
}

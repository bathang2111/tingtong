import React, { useRef, useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import {
  Card,
  CardActions,
  CardMedia,
  makeStyles,
  IconButton,
} from "@material-ui/core";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import { ArrowBackIos, ArrowForwardIos } from "@material-ui/icons";
import { useEffect } from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    overflow: "visible",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 7,
    // background: "#ffa",
    "&:hover": {
      background: "#2f8c92",
    },
  },

  title: {
    textAlign: "center",
  },
  description: {
    textAlign: "center",
  },
  actions: {
    marginTop: "20px",
    // background: "#ffa",
    display: "flex",
    // flexDirection: "row",
    justifyContent: "center",
    // alignItems: "center",
  },
  button: {
    width: 56,
    height: 56,
    boxShadow:
      "0px 3px 5px -1px rgb(0 0 0 / 20%), 0px 6px 10px 0px rgb(0 0 0 / 14%), 0px 1px 18px 0px rgb(0 0 0 / 12%)",
  },
}));

export default function AllPages(props) {
  const classes = useStyles();
  const [numPages, setNumPages] = useState(null);
  const [indexActive, setIndex] = useState(props.indexActive);
  const viewRef = useRef(null);
  pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
  const { pdp } = props;
  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  // const { pdf } = props;u
  const { pdfSlide } = props;

  return (
    <Document
      file={pdfSlide}
      options={{ workerSrc: "/pdf.worker.js" }}
      onLoadSuccess={onDocumentLoadSuccess}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row",

          width: "100%",
          height: "auto",
          overflowX: "auto",
          overflowY: "hidden",
        }}
      >
        {Array.from(new Array(props.preview ? 3 : numPages), (el, index) => (
          <Card
            style={
              props.lobby
                ? { height: 108, padding: 4 }
                : {
                    height: 78,
                    padding: 4,
                    background: index + 1 == indexActive ? "#4CAF50" : "",
                  }
            }
            className={classes.root}
          >
            <CardActionArea>
              <Page
                height={props.size}
                key={`page_${index + 1}`}
                pageNumber={index + 1}
                onClick={() => {
                  if (props.lobby) {
                    props.openSlide(true);
                    props.setIndexActive({
                      index: index + 1,
                      status: props.preview ? 1 : 2,
                    });
                  } else {
                    setIndex(index + 1);
                  }
                }}
              />
            </CardActionArea>
          </Card>
        ))}
      </div>
      {!props.lobby ? (
        <CardActions className={classes.actions}>
          <IconButton
            style={indexActive == 1 ? { boxShadow: "none" } : {}}
            onClick={() => {
              if (indexActive == 1) return;
              setIndex(indexActive - 1);
            }}
            className={classes.button}
            aria-label="add to favorites"
          >
            <ArrowBackIos />
          </IconButton>
          <CardContent>
            <Page height={props.sizePage} pageNumber={indexActive} />
          </CardContent>
          {props.preview ? (
            <IconButton
              style={indexActive == 3 ? { boxShadow: "none" } : {}}
              onClick={() => {
                if (indexActive == 3) return;
                setIndex(indexActive + 1);
              }}
              className={classes.button}
              aria-label="add to favorites"
            >
              <ArrowForwardIos />
            </IconButton>
          ) : (
            <IconButton
              style={indexActive == numPages ? { boxShadow: "none" } : {}}
              onClick={() => {
                if (indexActive == numPages) return;
                setIndex(indexActive + 1);
              }}
              className={classes.button}
              aria-label="add to favorites"
            >
              <ArrowForwardIos />
            </IconButton>
          )}
        </CardActions>
      ) : (
        ""
      )}
    </Document>
  );
}

{
  /* <div
style={{
  display: "flex",
  flexDirection: "row",
}}
>
<Page
  style={{
    height: 150,
    width: 200,
  }}
  pageNumber={1}
/>
<Page
  style={{
    height: 150,
    width: 200,
  }}
  pageNumber={2}
/>
</div> */
}

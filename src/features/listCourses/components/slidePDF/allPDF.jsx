import React, { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import "./style.css";
import { Card, CardMedia } from "@material-ui/core";
import CardActionArea from "@material-ui/core/CardActionArea";

export default function AllPages(props) {
  const [numPages, setNumPages] = useState(null);

  pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
  const { pdp } = props;
  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  // const { pdf } = props;
  const pdf =
    "https://cdn.tingtong.xyz/2021/06/21/S01+Why+Docker+Slides-ec2a36f963.pdf";

  return (
    <Document
      file={pdf}
      options={{ workerSrc: "/pdf.worker.js" }}
      onLoadSuccess={onDocumentLoadSuccess}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row",

          width: "100%",
          overflow: "scroll",
        }}
      >
        {Array.from(new Array(numPages), (el, index) => (
          <Card style={{ padding: 2, marginLeft: 5, borderRadius: 15 }}>
            <CardActionArea
              onClick={() => {
                props.openSlide(true);
              }}
            >
              <Page key={`page_${index + 1}`} pageNumber={index + 1} />
            </CardActionArea>
          </Card>
        ))}
      </div>
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

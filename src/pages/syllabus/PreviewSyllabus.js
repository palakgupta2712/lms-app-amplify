import React, { useContext, useEffect, useState } from "react";
import { Button } from "@material-ui/core";
import { Storage } from "aws-amplify";
import { Document, Page } from "react-pdf/dist/esm/entry.webpack";
import { Container } from "@material-ui/core";
import { UserContext } from "../../context/UserContext";

const options = {
  cMapUrl: "cmaps/",
  cMapPacked: true,
};

function PreviewSyllabus({ syllabus, handleDelete }) {
  const user = useContext(UserContext);
  const [url, setUrl] = useState();
  const [numPages, setNumPages] = useState(null);
  function onDocumentLoadSuccess({ numPages: nextNumPages }) {
    setNumPages(nextNumPages);
  }
  useEffect(() => {
    loadFileUrl(syllabus);
  }, [syllabus]);

  const loadFileUrl = async (syllabus) => {
    await Storage.get(syllabus.S3Key).then((res) => {
      setUrl(res);
    });
  };
  return (
    <>
      {user.username === syllabus.uploadedBy && (
        <Button
          onClick={() => {
            handleDelete(syllabus.id);
          }}
          variant="contained"
          color="primary"
          style={{ float: "right" }}
        >
          Delete
        </Button>
      )}
      <Container className="Example__container__document" maxWidth="lg">
        <br />
        <Document
          file={url}
          onLoadSuccess={onDocumentLoadSuccess}
          options={options}
        >
          {Array.from(new Array(numPages), (el, index) => (
            <div>
              {" "}
              <Page key={`page_${index + 1}`} pageNumber={index + 1} />
              <p style={{ display: "flex", justifyContent: "center" }}>
                Page {index + 1} of {numPages}
              </p>
            </div>
          ))}
        </Document>
      </Container>
    </>
  );
}

export default PreviewSyllabus;

import React from "react";

function PDFViewer(props) {
  const containerStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh", // viewport height
  };

  const iframeStyle = {
    width: "50%",
    height: "75vh",
    border: "none",
  };

  return (
    <div style={containerStyle}>
      <iframe
        src="https://www.africau.edu/images/default/sample.pdf"
        style={iframeStyle}
        title="PDF in iframe"
      ></iframe>
    </div>
  );
}

export default PDFViewer;

import CVpdf from "../../public/CVpdf.pdf";
import React, { useState, useRef, useEffect } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import "../App.css";
import "../index.css";
import Header from "../components/Header";

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

const CV = () => {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [width, setWidth] = useState(850);

  const containerRef = useRef();

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  useEffect(() => {
    const updateWidth = () => {
      if (containerRef.current) {
        const containerWidth = containerRef.current.offsetWidth;
        setWidth(Math.min(containerWidth, 850));
      }
    };

    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);
  return (
    <div className="mt-4">
      <Header title={"CV View"} />
      <div
        ref={containerRef}
        className="flex flex-col items-center mt-2 p-6 bg-gray-50 rounded-xl shadow-md w-full max-w-3xl mx-auto"
      >
        <div className="border border-gray-300 rounded-lg overflow-visible bg-white shadow w-full flex justify-center">
          <Document file={CVpdf} onLoadSuccess={onDocumentLoadSuccess}>
            <Page
              pageNumber={pageNumber}
              width={width}
              renderTextLayer={false}
              renderAnnotationLayer={false}
            />
          </Document>
        </div>
      </div>
    </div>
  );
};

export default CV;

/*
<div className="mt-4">
      <Header title={"CV"} />
      <div className="my-5 mx-auto max-w-4xl p-4 bg-gray-50 shadow-lg rounded-lg">
        <h2 className="text-xl font-semibold mb-4 text-center text-gray-800">
          CV View
        </h2>

        <div className="border border-gray-300 rounded overflow-hidden">
          <Document
            file={CVpdf}
            onLoadSuccess={onDocumentLoadSuccess}
            // Optional: Add a loading state for better UX
            loading={<div className="text-center p-8">Loading PDF...</div>}
            error={
              <div className="text-center p-8 text-red-600">
                Failed to load PDF.
              </div>
            }
          >
            <Page
              pageNumber={pageNumber}
              width={850}
              renderTextLayer={false}
              renderAnnotationLayer={false}
            />
          </Document>
        </div>

        {/*<div className="flex justify-between items-center mt-4 p-2 bg-white rounded shadow-md">
        <button
          className="px-4 py-2 bg-blue-500 text-white font-medium rounded hover:bg-blue-600 disabled:opacity-50 transition-colors"
          disabled={pageNumber <= 1}
          onClick={() => setPageNumber((prev) => prev - 1)}
        >
          &larr; Previous Page
        </button>

        <p className="text-lg font-mono text-gray-700">
          Page <span className="font-bold">{pageNumber}</span> of{" "}
          <span className="font-bold">{numPages || "-"}</span>
        </p>

        <button
          className="px-4 py-2 bg-blue-500 text-white font-medium rounded hover:bg-blue-600 disabled:opacity-50 transition-colors"
          disabled={pageNumber >= numPages}
          onClick={() => setPageNumber((prev) => prev + 1)}
        >
          Next Page &rarr;
        </button>
      </div>
      </div>
    </div>

*/

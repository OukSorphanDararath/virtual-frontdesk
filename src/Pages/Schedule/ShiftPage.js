import React, { useEffect, useState } from "react";
import axios from "axios";

const apiBaseUrl = process.env.REACT_APP_API_KEY;

const ShiftPage = ({ match }) => {
  // const [filePath, setFilePath] = useState();
  const [pdfUrl, setPdfUrl] = useState("");
  const { params } = match;
  const shift = params.shift;

  useEffect(() => {
    axios
      .get(`${apiBaseUrl}/schedules/${shift}`)
      .then((response) => {
        setPdfUrl(response?.data?.pdfPath);
      })
      .catch((error) => {
        console.error("There was an error fetching the data!", error);
      });
  }, [shift]);

  // useEffect(() => {
  //   if (filePath)
  //     axios
  //       .get(`${apiBaseUrl}/files/${filePath}`, {
  //         responseType: "blob", // Important for handling binary data
  //       })
  //       .then((response) => {
  //         const url = URL.createObjectURL(response.data);
  //         setPdfUrl(url);
  //       })
  //       .catch((error) => {
  //         console.log(error);
  //       });
  // }, [filePath]);

  return (
    <div className="h-full w-full border border-white/20 bg-white/20 rounded-xl overflow-hidden">
      <iframe src={pdfUrl} title="classSchedule" className="w-full h-full" />
    </div>
  );
};

export default ShiftPage;

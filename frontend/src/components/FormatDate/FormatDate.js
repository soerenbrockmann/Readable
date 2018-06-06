import React from "react";
import "./FormatDate.css";

const FormatDate = ({ timestamp = Date.now() }) => {
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
    timeZoneName: "short"
  };

  const date = new Date(timestamp).toLocaleString("en-GB", options);
  return <div className="formatdate">{date}</div>;
};
export default FormatDate;

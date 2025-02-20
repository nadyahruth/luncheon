import React from "react";
import ReactDOM from "react-dom";
import ReactCountdown from "react-countdown";

export default function Countdown() {
  const luncheonDate = new Date("2025-08-09");
  console.log(Date.parse(luncheonDate));
  return <ReactCountdown date={Date.parse(luncheonDate)} />;
}

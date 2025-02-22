import React from "react";
import ReactDOM from "react-dom";
import ReactCountdown from "react-countdown";
import { createRoot } from "react-dom/client";
import "./Countdown.css";

export default function Countdown() {
  const luncheonDate = new Date("2025-08-09");
  console.log(Date.parse(luncheonDate));

  return (
    <>
      <ReactCountdown
        date={Date.parse(luncheonDate)}
        renderer={(props) => (
          <div className="countdown-container">
            <div className="format-box">
              <div>{props.days}</div>
              <div>Days</div>
            </div>
            <div className="format-box">
              <div>{props.hours}</div>
              <div>Hours</div>
            </div>{" "}
            <div className="format-box">
              <div>{props.minutes}</div>
              <div>Minutes</div>
            </div>{" "}
            <div className="format-box">
              <div>{props.seconds}</div>
              <div>Seconds</div>
            </div>{" "}
          </div>
        )}
      />
    </>
  );
  // createRoot(document.getElementById("root")).render(
  //   <ReactCountdown date={Date.parse(luncheonDate)} />
  // );
}

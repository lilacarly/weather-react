import React, { useState } from "react";

export default function FormattedDate(props) {
  const [displayHours, setDisplayHours] = useState("");
  const [AMPM, setAMPM] = useState("am");
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[props.date.getDay()];
  let hours = props.date.getHours();
  console.log(hours);

  let minutes = props.date.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  return (
    <div>
      {day} {displayHours}:{minutes} {AMPM}
    </div>
  );
}

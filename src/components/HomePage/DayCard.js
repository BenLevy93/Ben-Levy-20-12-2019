import React from "react";
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
];
const DayCard = ({ day, imgSrc, minVal, maxVal, darkMode }) => {
  return (
    <div className="column">
      <div id={darkMode ? "nightCard" : "dayCard"} className="ui purple card">
        <div className="content">
          <h3>{days[day]}</h3>
        </div>
        <div className="content">
          <img className="ui image mini left floated" src={imgSrc} alt="icon" />
          <div className="right floated">{`${minVal}°/${maxVal}°`}</div>
        </div>
      </div>
    </div>
  );
};

export default DayCard;

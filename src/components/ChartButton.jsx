import React from "react";

function ChartButton({ text, setHistDate }) {
  let period = new Date(new Date().getTime() - 432000000).toString();
  if (text === "1 Month") {
    period = new Date(new Date().getTime() - 2592000000).toString();
  } else if (text === "6 Months") {
    period = new Date(new Date().getTime() - 15811200000).toString();
  } else if (text === "1 Year") {
    period = new Date(new Date().getTime() - 31536000000).toString();
  } else if (text === "5 Years") {
    period = new Date(new Date().getTime() - 157680000000).toString();
  }
  return (
    <div>
      <button type="button" onClick={(e) => setHistDate(period)}>
        {text}
      </button>
    </div>
  );
}

export default ChartButton;

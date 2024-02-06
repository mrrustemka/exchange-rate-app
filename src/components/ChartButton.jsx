import React from "react";

function ChartButton({ text, setHistDate }) {
  let period = new Intl.DateTimeFormat("ru-RU")
    .format(new Date(new Date().getTime() - 432000000))
    .split(".");
  if (text === "1 Month") {
    period = new Intl.DateTimeFormat("ru-RU")
      .format(new Date(new Date().getTime() - 2592000000))
      .split(".");
  } else if (text === "6 Months") {
    period = new Intl.DateTimeFormat("ru-RU")
      .format(new Date(new Date().getTime() - 15811200000))
      .split(".");
  } else if (text === "1 Year") {
    period = new Intl.DateTimeFormat("ru-RU")
      .format(new Date(new Date().getTime() - 31536000000))
      .split(".");
  } else if (text === "5 Years") {
    period = new Intl.DateTimeFormat("ru-RU")
      .format(new Date(new Date().getTime() - 157680000000))
      .split(".");
  }
  period.push(period[1], period[0]);
  period = period.slice(2).join("-");

  return (
    <div>
      <button type="button" onClick={(e) => setHistDate(period)}>
        {text}
      </button>
    </div>
  );
}

export default ChartButton;

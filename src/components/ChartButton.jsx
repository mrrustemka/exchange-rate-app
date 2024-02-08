import React from "react";

function ChartButton({ text, setHistDate, period }) {
  period.push(period[1], period[0]);
  period = period.slice(2).join("-");

  return (
    <div class="d-inline m-2">
      <button
        type="button"
        class="btn btn-dark"
        onClick={(e) => setHistDate(period)}
      >
        {text}
      </button>
    </div>
  );
}

export default ChartButton;

import React from "react";
import { Doughnut } from "react-chartjs-2";

function Chart({ data }) {
  console.log(data["2024-01-02"]);
  return <div>{<Doughnut data={data["2024-01-02"]} />}</div>;
}

export default Chart;

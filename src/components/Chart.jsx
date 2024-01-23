import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
} from "chart.js";

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement);

function Chart({ data }) {
  function parse(arr) {
    let answer = [];
    for (let i = 0; i < arr.length; i++) {
      answer.push(arr[i].EUR);
    }
    return answer;
  }

  const currencyValues = parse(Object.values(data));
  const dataset = {
    labels: Object.keys(data),
    datasets: [
      {
        label: Object.keys(Object.values(data)[0]),
        data: currencyValues,
        fill: false,
        backgroundColor: "aqua",
        borderColor: "rgb(75, 192, 192)",
        pointerBorderColor: "aqua",
        tension: 0.4,
      },
    ],
  };

  const options = {
    plugins: {
      legend: true,
      title: {
        display: true,
        text: "Custom Chart Title",
        padding: {
          top: 10,
          bottom: 30,
        },
      },
    },
    scales: {
      y: {
        // min : 3,
        // max: 6
      },
    },
  };
  return (
    <div>
      <Line data={dataset} options={options} label={dataset.labels}></Line>
    </div>
  );
}

export default Chart;

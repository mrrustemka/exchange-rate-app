import { useEffect, useState } from "react";
import Input from "./components/Input";
import Output from "./components/Output";
import Currency from "./components/Currency";
import Header from "./components/Header";
import Keyboard from "./components/Keyboard";
import Button from "./components/Button";
import Chart from "./components/Chart";
import "./App.css";
import ChartButton from "./components/ChartButton";

function App() {
  const [value, setValue] = useState("1");
  const [fromValue, setFromValue] = useState("USD");
  const [toValue, setToValue] = useState("EUR");
  const [result, setResult] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [convert, setConvert] = useState(value);
  const [hist, setHist] = useState([{ "": { "": 0 } }]);
  const [histDate, setHistDate] = useState("2024-02-06");

  useEffect(
    function () {
      async function fetchCurrency() {
        setIsLoading(true);
        fetch(
          `https://api.frankfurter.app/latest?amount=${parseFloat(
            value
          )}&from=${fromValue}&to=${toValue}`
        )
          .then((resp) => resp.json())
          .then((data) => {
            setResult(Math.round(data.rates[toValue] * 100) / 100);
            setIsLoading(false);
          });
      }

      if (fromValue === toValue) {
        setResult(value);
      } else {
        fetchCurrency();
      }
    },
    [convert]
  );

  useEffect(
    function () {
      async function fetchHistoricalCurrency() {
        fetch(
          `https://api.frankfurter.app/${histDate}..?amount=${parseFloat(
            value
          )}&from=${fromValue}&to=${toValue}`
        )
          .then((resp) => resp.json())
          .then((data) => {
            setHist(data.rates);
            setIsLoading(false);
          });
      }

      if (fromValue !== toValue) {
        fetchHistoricalCurrency();
      } else {
        setHist([{ "": { "": 0 } }]);
      }
    },
    [histDate, convert]
  );
  return (
    <div class="main form-floating mb-3 bg-dark">
      <div class="row text-center m-4">
        <Header
          result={Math.round((result / value) * 100) / 100}
          fromCur={fromValue}
          toCur={toValue}
        />
      </div>
      <div class="row">
        <div class="col-3 border border-rounded-start bg-secondary-subtle rounded-start p-4 text-center">
          <div class="w-50 m-auto">
            <Input value={value} setValue={setValue} isLoading={isLoading} />
            <Currency
              value={fromValue}
              setValue={setFromValue}
              isLoading={isLoading}
            />
            <Output value={result} isLoading={isLoading} />
            <Currency
              value={toValue}
              setValue={setToValue}
              isLoading={isLoading}
            />
          </div>
          <Keyboard value={value} setValue={setValue} />
          <Button setConvert={setConvert} value={value} />
        </div>
        <div class="col-8 border border-rounded-start bg-secondary-subtle rounded-end p-4  text-center">
          <Chart data={hist} />
          <ChartButton key="5days" text="5 days" setHistDate={setHistDate} />
          <ChartButton key="1month" text="1 Month" setHistDate={setHistDate} />
          <ChartButton
            key="6months"
            text="6 Months"
            setHistDate={setHistDate}
          />
          <ChartButton key="1year" text="1 Year" setHistDate={setHistDate} />
          <ChartButton key="5years" text="5 Years" setHistDate={setHistDate} />
        </div>
      </div>
    </div>
  );
}

export default App;

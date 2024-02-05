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
  const [histDate, setHistDate] = useState(
    new Date(new Date().getTime() - 432000000).toString()
  );

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
    [convert, fromValue, toValue, value]
  );

  useEffect(
    function () {
      async function fetchHistoricalCurrency() {
        fetch(
          `https://api.frankfurter.app/2024-02-05..?amount=${parseFloat(
            value
          )}&from=${fromValue}&to=${toValue}`
        )
          .then((resp) => resp.json())
          .then((data) => {
            setHist(data.rates);
            setIsLoading(false);
          });
      }
      fetchHistoricalCurrency();
    },
    [fromValue, toValue, value]
  );

  console.log(
    "5 days ago",
    new Date(new Date().getTime() - 432000000).toString()
  );
  console.log(
    "1 month ago",
    new Date(new Date().getTime() - 2592000000).toString()
  );
  console.log(
    "6 month ago",
    new Date(new Date().getTime() - 15811200000).toString()
  );
  console.log(
    "1 year ago",
    new Date(new Date().getTime() - 31536000000).toString()
  );
  console.log(
    "5 year ago",
    new Date(new Date().getTime() - 157680000000).toString()
  );
  console.log(histDate);

  return (
    <div class="form-floating mb-3">
      <Header
        result={Math.round((result / value) * 100) / 100}
        fromCur={fromValue}
        toCur={toValue}
      />
      <Input value={value} setValue={setValue} isLoading={isLoading} />
      <Currency
        value={fromValue}
        setValue={setFromValue}
        isLoading={isLoading}
      />
      <Output value={result} isLoading={isLoading} />
      <Currency value={toValue} setValue={setToValue} isLoading={isLoading} />
      <Button setConvert={setConvert} value={value} />
      <Keyboard value={value} setValue={setValue} />
      <ChartButton text="5 days" setHistDate={setHistDate} />
      <ChartButton text="1 Month" setHistDate={setHistDate} />
      <ChartButton text="6 Months" setHistDate={setHistDate} />
      <ChartButton text="1 Year" setHistDate={setHistDate} />
      <ChartButton text="5 Years" setHistDate={setHistDate} />
      <Chart data={hist} />
    </div>
  );
}

export default App;

import { useEffect, useState } from "react";
import Input from "./components/Input";
import Output from "./components/Output";
import Currency from "./components/Currency";
import Header from "./components/Header";
import Keyboard from "./components/Keyboard";
import Button from "./components/Button";
import Chart from "./components/Chart";
import "./App.css";

function App() {
  const [value, setValue] = useState("1");
  const [fromValue, setFromValue] = useState("USD");
  const [toValue, setToValue] = useState("EUR");
  const [result, setResult] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [convert, setConvert] = useState(value);
  const [hist, setHist] = useState([{ "": { "": 0 } }]);

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
          `https://api.frankfurter.app/2024-01-01..?amount=${parseFloat(
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
      <Chart data={hist} />
    </div>
  );
}

export default App;

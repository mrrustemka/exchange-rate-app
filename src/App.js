import { useEffect, useState } from "react";
import Input from "./components/Input";
import Output from "./components/Output";
import Currency from "./components/Currency";
import Header from "./components/Header";
import Keyboard from "./components/Keyboard";
import Button from "./components/Button";
import Chart from "./components/Chart";
import ChartButton from "./components/ChartButton";
import "./App.css";

function getDate() {
  let date = new Intl.DateTimeFormat("ru-RU")
    .format(new Date(new Date().getTime() - 2592000000))
    .split(".");
  date.push(date[1], date[0]);
  return date.slice(2).join("-");
}

function App() {
  const [value, setValue] = useState("1");
  const [fromValue, setFromValue] = useState("USD");
  const [toValue, setToValue] = useState("EUR");
  const [result, setResult] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [convert, setConvert] = useState(1);
  const [hist, setHist] = useState([{ "": { "": 0 } }]);
  const [histDate, setHistDate] = useState(getDate());

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
      async function fetchHistCurrency() {
        setIsLoading(true);
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
        fetchHistCurrency();
      } else {
        setHist([{ "": { "": 0 } }]);
      }
    },
    [histDate, convert]
  );
  return (
    <div className="main form-floating mb-3 bg-dark">
      <div className="row text-center m-4">
        <Header
          result={Math.round((result / value) * 100) / 100}
          fromCur={fromValue}
          toCur={toValue}
        />
      </div>
      <div className="row">
        <div className="col-3 border border-rounded-start bg-secondary-subtle rounded-start p-4 text-center">
          <div className="w-50 m-auto">
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
        <div className="col-8 border border-rounded-start bg-secondary-subtle rounded-end p-4  text-center">
          <Chart data={hist} />
          <ChartButton
            key="5days"
            text="5 Days"
            setHistDate={setHistDate}
            period={new Intl.DateTimeFormat("ru-RU")
              .format(new Date(new Date().getTime() - 432e6))
              .split(".")}
          />
          <ChartButton
            key="10days"
            text="10 Days"
            setHistDate={setHistDate}
            period={new Intl.DateTimeFormat("ru-RU")
              .format(new Date(new Date().getTime() - 864e6))
              .split(".")}
          />
          <ChartButton
            key="1month"
            text="1 Month"
            setHistDate={setHistDate}
            period={new Intl.DateTimeFormat("ru-RU")
              .format(new Date(new Date().getTime() - 2592e6))
              .split(".")}
          />
          <ChartButton
            key="3months"
            text="3 Months"
            setHistDate={setHistDate}
            period={new Intl.DateTimeFormat("ru-RU")
              .format(new Date(new Date().getTime() - 7776e6))
              .split(".")}
          />
          <ChartButton
            key="6months"
            text="6 Months"
            setHistDate={setHistDate}
            period={new Intl.DateTimeFormat("ru-RU")
              .format(new Date(new Date().getTime() - 158112e5))
              .split(".")}
          />
          <ChartButton
            key="1year"
            text="1 Year"
            setHistDate={setHistDate}
            period={new Intl.DateTimeFormat("ru-RU")
              .format(new Date(new Date().getTime() - 31536e6))
              .split(".")}
          />
          <ChartButton
            key="3years"
            text="3 Years"
            setHistDate={setHistDate}
            period={new Intl.DateTimeFormat("ru-RU")
              .format(new Date(new Date().getTime() - 94608e6))
              .split(".")}
          />
          <ChartButton key="5years" text="5 Years" setHistDate={setHistDate} period={new Intl.DateTimeFormat("ru-RU")
      .format(new Date(new Date().getTime() - 15768e7))
      .split(".")}/>
        </div>
      </div>
    </div>
  );
}

export default App;

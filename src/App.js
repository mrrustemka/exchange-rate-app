import { useEffect, useState } from "react";
import Input from "./components/Input";
import Currency from "./components/Currency";
import Header from "./components/Header";
import "./App.css";

function App() {
  const [value, setValue] = useState(1);
  const [fromValue, setFromValue] = useState("USD");
  const [toValue, setToValue] = useState("EUR");
  const [result, setResult] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(
    function () {
      async function fetchCurrency() {
        setIsLoading(true);
        const convert = fetch(
          `https://api.frankfurter.app/latest?amount=${value}&from=${fromValue}&to=${toValue}`
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
    [value, fromValue, toValue]
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
      <Currency value={toValue} setValue={setToValue} isLoading={isLoading} />
      <p>
        {isLoading ? "Loading..." : result} {toValue}
      </p>
    </div>
  );
}

export default App;

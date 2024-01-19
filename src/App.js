import { useEffect, useState } from "react";
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
            setIsLoading(false);
            setResult(Math.round(data.rates[toValue] * 100) / 100);
          });
      }
      fetchCurrency();
    },
    [value, fromValue, toValue]
  );

  return (
    <div>
      <input
        type="text"
        onChange={(e) => setValue(e.target.value)}
        value={value}
      />
      <select onChange={(e) => setFromValue(e.target.value)} value={fromValue}>
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="CAD">CAD</option>
        <option value="INR">INR</option>
      </select>
      <select onChange={(e) => setToValue(e.target.value)} value={toValue}>
        <option value="EUR">EUR</option>
        <option value="USD">USD</option>
        <option value="CAD">CAD</option>
        <option value="INR">INR</option>
      </select>
      <p>{isLoading ? "Loading" : result} {toValue}</p>
    </div>
  );
}

export default App;

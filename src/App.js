import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
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
      <input
        type="text"
        class="form-control"
        placeholder="Enter the Amount"
        onChange={(e) => setValue(e.target.value)}
        value={value}
        disabled={isLoading}
      />
      <select
        className="form-select"
        onChange={(e) => setFromValue(e.target.value)}
        value={fromValue}
        disabled={isLoading}
      >
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="CAD">CAD</option>
        <option value="INR">INR</option>
      </select>
      <select
        className="form-select"
        onChange={(e) => setToValue(e.target.value)}
        value={toValue}
        disabled={isLoading}
      >
        <option value="EUR">EUR</option>
        <option value="USD">USD</option>
        <option value="CAD">CAD</option>
        <option value="INR">INR</option>
      </select>
      <p>
        {isLoading ? "Loading..." : result} {toValue}
      </p>
    </div>
  );
}

export default App;

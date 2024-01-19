import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [value, setValue] = useState(0);
  const [fromValue, setFromValue] = useState("USD");
  const [toValue, setToValue] = useState("EUR");
  const [result, setResult] = useState(0);

  useEffect(
    function () {
      async function fetchCurrency() {
        const result = fetch(
          `https://api.frankfurter.app/latest?amount=${value}&from=${fromValue}&to=${toValue}`
        )
          .then((resp) => resp.json())
          .then((data) => {
            if (data.rates !== undefined) {
              handleResult(data.rates[toValue]);
            }
          });
      }
      fetchCurrency();
    },
    [value, fromValue, toValue]
  );

  function handleResult(data) {
    setResult(data);
  }

  return (
    <div>
      <input type="text" onChange={(e) => setValue(e.target.value)} value={value} />
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
      <p>
        {result} {toValue}
      </p>
    </div>
  );
}

export default App;

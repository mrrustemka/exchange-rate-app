import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [value, setValue] = useState(0);
  const [fromValue, setFromValue] = useState("USD");
  const [toValue, setToValue] = useState("USD");
  const [result, setResult] = useState("");

  useEffect(
    function () {
      async function fetchCurrency() {
        const result = fetch(
          `https://api.frankfurter.app/latest?amount=${value}&from=${fromValue}&to=${toValue}`
        )
          .then((resp) => resp.json())
          .then((data) => {
            if (data.rates !== undefined) {
              console.log(data.rates);
              handleResult(data.rates);
            }
          });
      }
      fetchCurrency();
    },
    [value, fromValue, toValue]
  );

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const handleFromChange = (event) => {
    setFromValue(event.target.value);
  };

  const handleToChange = (event) => {
    setToValue(event.target.value);
  };

  function handleResult(data) {
    if (toValue === "USD") {
      setResult(data.USD);
    } else if (toValue === "EUR") {
      setResult(data.EUR);
    } else if (toValue === "CAD") {
      setResult(data.CAD);
    } else {
      setResult(data.INR);
    }
  }

  return (
    <div>
      <input type="text" onChange={handleChange} value={value} />
      <select onChange={handleFromChange} value={fromValue}>
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="CAD">CAD</option>
        <option value="INR">INR</option>
      </select>
      <select onChange={handleToChange} value={toValue}>
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
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

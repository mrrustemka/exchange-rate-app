import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [value, setValue] = useState(0);
  const [fromValue, setFromValue] = useState("USD");
  const [toValue, setToValue] = useState("USD");

  useEffect(
    function () {
      async function fetchCurrency() {
        const result = fetch(
          `https://api.frankfurter.app/latest?amount=${value}&from=${fromValue}&to=${toValue}`
        )
          .then((resp) => resp.json())
          .then((data) => {
            console.log(data.rates);
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
    </div>
  );
}

export default App;

import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [value, setValue] = useState(0);
  useEffect(
    function () {
      async function fetchCurrency() {
        const result = fetch(
          `https://api.frankfurter.app/latest?amount=${value}&from=GBP&to=USD`
        )
          .then((resp) => resp.json())
          .then((data) => {
            console.log(data.rates);
          });
      }
      fetchCurrency();
    },
    [value]
  );

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <div>
      <input type="text" onChange={handleChange} value={value} />
      <select>
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="CAD">CAD</option>
        <option value="INR">INR</option>
      </select>
      <select>
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="CAD">CAD</option>
        <option value="INR">INR</option>
      </select>
    </div>
  );
}

export default App;

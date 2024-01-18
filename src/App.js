import { useEffect } from "react";
import "./App.css";

function App() {
  useEffect(function () {
    async function fetchCurrency() {
      const result = fetch(
        `https://api.frankfurter.app/latest?amount=10&from=GBP&to=USD`
      )
        .then((resp) => resp.json())
        .then((data) => {
          console.log(data.rates);
        });
    }
    fetchCurrency();
  }, []);

  return (
    <div>
      <input type="text" />
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

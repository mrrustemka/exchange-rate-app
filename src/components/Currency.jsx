import React from "react";

function Currency({ value, setValue, isLoading }) {
  return (
    <div>
      <select
        className="form-select  m-2"
        onChange={(e) => setValue(e.target.value)}
        value={value}
        disabled={isLoading}
      >
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="JPY">JPY</option>
        <option value="GBP">GBP</option>
        <option value="CNY">CNY</option>
        <option value="AUD">AUD</option>
        <option value="CAD">CAD</option>
        <option value="CHF">CHF</option>
        <option value="HKD">HKD</option>
        <option value="SGD">SGD</option>
        <option value="SEK">SEK</option>
        <option value="KRW">KRW</option>
        <option value="NOK">NOK</option>
        <option value="NZD">NZD</option>
        <option value="INR">INR</option>
        <option value="GEL">GEL</option>
      </select>
    </div>
  );
}

export default Currency;

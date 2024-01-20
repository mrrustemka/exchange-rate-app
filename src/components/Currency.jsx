import React from "react";

function Currency({ value, setValue, isLoading }) {
  return (
    <div>
      <select
        className="form-select"
        onChange={(e) => setValue(e.target.value)}
        value={value}
        disabled={isLoading}
      >
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="CAD">CAD</option>
        <option value="INR">INR</option>
      </select>
    </div>
  );
}

export default Currency;

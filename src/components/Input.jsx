import React from "react";

function Input({ value, setValue, isLoading }) {
  return (
    <div>
      <input
        type="text"
        class="form-control"
        placeholder="Enter the Amount"
        onChange={(e) => setValue(e.target.value)}
        value={value}
        disabled={isLoading}
        id="test"
      />
    </div>
  );
}

export default Input;

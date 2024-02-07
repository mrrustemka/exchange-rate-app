import React from "react";

function Input({ value, setValue, isLoading }) {
  return (
    <div>
      <input
        type="text"
        class="form-control m-2"
        placeholder="Enter the Amount"
        onChange={(e) => setValue(e.target.value)}
        value={value}
        disabled={isLoading}
      />
    </div>
  );
}

export default Input;

import React from "react";

function Output({ value, isLoading }) {
  return (
    <div>
      <input
        type="text"
        className="form-control m-2"
        readOnly
        value={isLoading ? "Loading..." : value}
      />
    </div>
  );
}

export default Output;

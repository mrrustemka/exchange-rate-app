import React from "react";

function Button({ value, setConvert }) {
  return (
    <div>
      <button
        type="button"
        className="btn btn-dark"
        onClick={(e) => setConvert(value)}
      >
        Convert
      </button>
    </div>
  );
}

export default Button;

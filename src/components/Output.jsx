import React from "react";

function Output({ value }) {
  return (
    <div>
      <input readOnly value={value}></input>
    </div>
  );
}

export default Output;

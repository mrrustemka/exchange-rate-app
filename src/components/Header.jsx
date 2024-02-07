import React from "react";

function Header({ result, fromCur, toCur }) {
  return (
    <div class="text-white">
      <h1>Converter</h1>
      <h5>
        1 {fromCur} equals {result} {toCur}
      </h5>
    </div>
  );
}

export default Header;

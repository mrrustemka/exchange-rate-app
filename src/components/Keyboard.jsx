import React from "react";

function Keyboard({ value, setValue }) {
  return (
    <div>
      <div class="btn-group keyboard me-2" role="group">
        <button
          type="button"
          class="btn btn-outline-secondary"
          onClick={(e) => setValue(value + "1")}
        >
          1
        </button>
        <button
          type="button"
          class="btn btn-outline-secondary"
          onClick={(e) => setValue(value + "2")}
        >
          2
        </button>
        <button
          type="button"
          class="btn btn-outline-secondary"
          onClick={(e) => setValue(value + "3")}
        >
          3
        </button>
      </div>
      <div class="btn-group keyboard me-2" role="group">
        <button
          type="button"
          class="btn btn-outline-secondary"
          onClick={(e) => setValue(value + "4")}
        >
          4
        </button>
        <button
          type="button"
          class="btn btn-outline-secondary"
          onClick={(e) => setValue(value + "5")}
        >
          5
        </button>
        <button
          type="button"
          class="btn btn-outline-secondary"
          onClick={(e) => setValue(value + "6")}
        >
          6
        </button>
      </div>
      <div class="btn-group keyboard me-2" role="group">
        <button
          type="button"
          class="btn btn-outline-secondary"
          onClick={(e) => setValue(value + "7")}
        >
          7
        </button>
        <button
          type="button"
          class="btn btn-outline-secondary"
          onClick={(e) => setValue(value + "8")}
        >
          8
        </button>
        <button
          type="button"
          class="btn btn-outline-secondary"
          onClick={(e) => setValue(value + "9")}
        >
          9
        </button>
      </div>
      <div class="btn-group keyboard me-2" role="group">
        <button
          type="button"
          class="btn btn-outline-secondary"
          onClick={(e) => setValue(value + ".")}
        >
          .
        </button>
        <button
          type="button"
          class="btn btn-outline-secondary"
          onClick={(e) => setValue(value + "0")}
        >
          0
        </button>
        <button
          type="button"
          class="btn btn-outline-secondary"
          onClick={(e) => setValue(value.slice(0, value.length - 1))}
        >
          x
        </button>
      </div>
    </div>
  );
}

export default Keyboard;

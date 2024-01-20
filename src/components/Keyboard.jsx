import React from "react";

function Keyboard({ value, setValue }) {
  return (
    <div>
      <div class="btn-group keyboard me-2" role="group">
        <button
          type="button"
          class="btn btn-outline-secondary"
          onClick={(e) => setValue(parseInt(value.toString() + "1"))}
        >
          1
        </button>
        <button
          type="button"
          class="btn btn-outline-secondary"
          onClick={(e) => setValue(parseInt(value.toString() + "2"))}
        >
          2
        </button>
        <button
          type="button"
          class="btn btn-outline-secondary"
          onClick={(e) => setValue(parseInt(value.toString() + "3"))}
        >
          3
        </button>
      </div>
      <div class="btn-group keyboard me-2" role="group">
        <button
          type="button"
          class="btn btn-outline-secondary"
          onClick={(e) => setValue(parseInt(value.toString() + "4"))}
        >
          4
        </button>
        <button
          type="button"
          class="btn btn-outline-secondary"
          onClick={(e) => setValue(parseInt(value.toString() + "5"))}
        >
          5
        </button>
        <button
          type="button"
          class="btn btn-outline-secondary"
          onClick={(e) => setValue(parseInt(value.toString() + "6"))}
        >
          6
        </button>
      </div>
      <div class="btn-group keyboard me-2" role="group">
        <button
          type="button"
          class="btn btn-outline-secondary"
          onClick={(e) => setValue(parseInt(value.toString() + "7"))}
        >
          7
        </button>
        <button
          type="button"
          class="btn btn-outline-secondary"
          onClick={(e) => setValue(parseInt(value.toString() + "8"))}
        >
          8
        </button>
        <button
          type="button"
          class="btn btn-outline-secondary"
          onClick={(e) => setValue(parseInt(value.toString() + "9"))}
        >
          9
        </button>
      </div>
      <div class="btn-group keyboard me-2" role="group">
        <button
          type="button"
          class="btn btn-outline-secondary"
          onClick={(e) => setValue(parseInt(value.toString() + "."))}
        >
          .
        </button>
        <button
          type="button"
          class="btn btn-outline-secondary"
          onClick={(e) => setValue(parseInt(value.toString() + "0"))}
        >
          0
        </button>
        <button
          type="button"
          class="btn btn-outline-secondary"
          onClick={(e) =>
            setValue(
              parseInt(value.toString().slice(0, value.toString().length - 1))
            )
          }
        >
          x
        </button>
      </div>
    </div>
  );
}

export default Keyboard;

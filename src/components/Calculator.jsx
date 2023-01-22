import React from "react";
import { useState } from "react";
import "./Calculator.css";
const Calculator = () => {
  const [value, setValue] = useState("");
  // console.log(value)
  const clickHandler = (e) => {
    setValue(value.concat(e.target.value));
  };
  const clickCalculate = () => {
    const calculation = eval(value);
    setValue(calculation);
  };
  const clickRemove = () => {
    setValue("");
  };
  const clickEdit = () => {
    setValue(value.substring(0, value.length - 1));
  };
  return (
    <div className="container">
      <div className="up-sec">
        <input type="text" placeholder="0" value={value} />
      </div>
      <div className="down-sec">
        <div className="button-sec">
          <input
            type="button"
            value="AC"
            onClick={clickRemove}
            style={{ color: "#4605fa" }}
          />
          <input
            type="button"
            value="."
            onClick={clickHandler}
            style={{ color: "#4605fa" }}
          />
          <input
            type="button"
            value="%"
            onClick={clickHandler}
            style={{ color: "#4605fa" }}
          />
          <input
            type="button"
            value="/"
            onClick={clickHandler}
            style={{ color: "#b31602" }}
          />
        </div>
        <div className="button-sec">
          <input type="button" value="7" onClick={clickHandler} />
          <input type="button" value="8" onClick={clickHandler} />
          <input type="button" value="9" onClick={clickHandler} />
          <input
            type="button"
            value="*"
            onClick={clickHandler}
            style={{ color: "#b31602" }}
          />
        </div>
        <div className="button-sec">
          <input type="button" value="4" onClick={clickHandler} />
          <input type="button" value="5" onClick={clickHandler} />
          <input type="button" value="6" onClick={clickHandler} />
          <input
            type="button"
            value="-"
            onClick={clickHandler}
            style={{ color: "#b31602" }}
          />
        </div>
        <div className="button-sec">
          <input type="button" value="1" onClick={clickHandler} />
          <input type="button" value="2" onClick={clickHandler} />
          <input type="button" value="3" onClick={clickHandler} />
          <input
            type="button"
            value="+"
            onClick={clickHandler}
            style={{ color: "#b31602" }}
          />
        </div>
        <div className="button-sec">
          <input type="button" value="C" onClick={clickEdit} />
          <input type="button" value="0" onClick={clickHandler} />
          <input type="button" value="00" onClick={clickHandler} />
          <input
            type="button"
            value="="
            onClick={clickCalculate}
            style={{ color: "red" }}
          />
        </div>
      </div>
    </div>
  );
};

export default Calculator;

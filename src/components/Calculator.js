import React, { useState } from "react";
import Info from "./Info";
const Calculator = () => {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [bmi, setBMI] = useState(0);
  const [alertText, setAlertText] = useState("");

  const handleClick = (e) => {
    e.preventDefault();
    if (height < 100 || height > 230) {
      setAlertText("Proszę wprowadzić poprawny wzrost");
      return;
    }
    setAlertText("");
    let bmiInt = weight / Math.pow(height / 100, 2);
    bmiInt = bmiInt.toFixed(2);
    setBMI(bmiInt);
  };

  const handleChange = (e) => {
    if (e.target.value.length > 3) {
      return;
    } else {
      if (e.target.id === "weight") {
        setWeight(e.target.value);
      } else if (e.target.id === "height") {
        setHeight(e.target.value);
      }
    }
  };

  return (
    <div className="calculator">
      <form>
        <label htmlFor="weight" className="labelWeight">
          Waga <br />
        </label>{" "}
        <input
          type="number"
          id="weight"
          value={weight}
          onChange={handleChange}
          className="weight"
        />{" "}
        <label htmlFor="height">
          Wzrost <br />{" "}
        </label>
        <p>{alertText ? alertText : null}</p>
        <input
          type="number"
          id="height"
          value={height}
          onChange={handleChange}
          className="height"
        />{" "}
        <br />
        <button onClick={handleClick} className="calculator__btn">
          Oblicz BMI
        </button>
        <div className="result">
          {bmi > 0 ? (
            <div className="bmi-result">
              <h3>Twoje BMI</h3>
              <p>{bmi}</p>
            </div>
          ) : null}
        </div>
      </form>
      <Info bmi={bmi} />
    </div>
  );
};

export default Calculator;

import React from "react";

function Form(props) {
  const { temperature, setTemperature } = props;

  const handleChange = (temperature) => {
    setTemperature(temperature)
  }

  return (
    <div className="form">
      <p>Temperature in Celcius : {temperature} C°</p>
      <div className="buttons">
        <button onClick={()=>handleChange(temperature-1)}>-</button>
        <button onClick={()=>handleChange(temperature+1)}>+</button>
      </div>
    </div>
  );
}

export default Form;

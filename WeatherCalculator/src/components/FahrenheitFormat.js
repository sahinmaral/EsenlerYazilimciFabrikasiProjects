import React from 'react'

function FahrenheitFormat(props) {

  const fahrenheitFormat = ((props.temperature * 1.8) + 32).toPrecision(7)

  return (
    <div>
      <p>Fahrenheit : {fahrenheitFormat} °F</p>
    </div>
  )
}

export default FahrenheitFormat
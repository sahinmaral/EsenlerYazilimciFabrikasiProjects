import React from 'react'

function KelvinFormat(props) {

  const kelvinFormat = props.temperature + + 273.15

  return (
    <div>
      <p>Kelvin : {kelvinFormat} °K</p>
    </div>
  )
}

export default KelvinFormat
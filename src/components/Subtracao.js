import React from 'react'

const Subtracao = (props) => {
  return (
    <div>
      <h1>Subtração:</h1>
      <h1>A subtração entre os numeros {props.num1} e {props.num2} é igual a: {props.num1 - props.num2}</h1>
      <h1>-------------------------------------------------------------------------------------------</h1>
    </div>
    
  )
}

export default Subtracao


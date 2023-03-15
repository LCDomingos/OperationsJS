import React from 'react'

const Divisao = (props) => {
  return (
    <div>
      <h1>Divisao:</h1>
      <h1>A divisão entre os numeros {props.num1} e {props.num2} é igual a: {props.num1 / props.num2}</h1>
      <h1>-------------------------------------------------------------------------------------------</h1>
    </div>
    
  )
}

export default Divisao



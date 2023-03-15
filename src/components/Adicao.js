//chama o rafce o proprio js já tras pronto uma arow function
import React from 'react'

const Adicao = (props) => {
  return (
    <div>
      <h1>Adição:</h1>
      <h1>A soma entre os numeros {props.num1} e {props.num2} é igual a: {props.num1 + props.num2}</h1>
      <h1>-------------------------------------------------------------------------------------------</h1>
    </div>
    
  )
}

export default Adicao



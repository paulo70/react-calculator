import React from 'react'

const Button = ({
  label,
  double,
  triple,
  operation,
  handle}) => (

  <button
    onClick = { e => handle && handle(e.target.innerHTML)}
    className={`
      button
      ${ double    ? 'double' : ''}
      ${ triple    ? 'triple' : ''}
      ${ operation ? 'operation' : ''}
  `}>

    { label }
  </button>
)

export default Button


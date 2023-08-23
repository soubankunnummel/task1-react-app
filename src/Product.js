import React from 'react'

function Product(props) {
  return (
    <div>
    <h1>{props.name}</h1>
    <p>${props.price} USD</p> <span>{props.discripition} </span>

    </div>
  )
}

export default Product

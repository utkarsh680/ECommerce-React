import React from 'react'

export default function ProductsCard(props) {
    const {product} = props;
  return (
    <div>{product.title}</div>
  )
}

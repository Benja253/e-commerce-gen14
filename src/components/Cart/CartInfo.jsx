import React from 'react'

const CartInfo = ({productCart}) => {
  return (
    <section>
      <h4>{productCart.brand}</h4>
      <h3>{productCart.title}</h3>
      <p>{productCart.productsInCart.quantity}</p>
    </section>
  )
}

export default CartInfo
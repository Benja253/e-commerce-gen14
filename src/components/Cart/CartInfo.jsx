import React from 'react'

const CartInfo = ({productCart}) => {

  console.log(productCart)

  return (
    <section className='cart-info'>
      <header className='cart-info__header'>
        <h4 className='cart-info__subtitle'>{productCart.brand}</h4>
        <h3 className='cart-info__title'>{productCart.title}</h3>
      </header>
      <p className='cart-info__quantity'>{productCart.productsInCart.quantity}</p>
      <p className='cart-info__price'>$ {productCart.price}</p>
      <div className='cart-info__btn'>
        <i className="fa-solid fa-trash-can"></i>
      </div>
    </section>
  )
}

export default CartInfo
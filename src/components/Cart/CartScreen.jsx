import axios from 'axios'
import React from 'react'
import { useSelector } from 'react-redux'
import getConfig from '../../utils/getConfig'
import CartInfo from './CartInfo'
import './style/cartScreen.css'

const CartScreen = () => {

  const postPurchase = () => {

    const URL = 'https://ecommerce-api-react.herokuapp.com/api/v1/purchases'

    const objPurchase = {
      street: "Green St. 1456",
      colony: "Southwest",
      zipCode: 12345,
      city: "USA",
      references: "Some references"
    }

    axios.post(URL, objPurchase, getConfig())
      .then(res => console.log(res.data))
      .catch(err => console.log(err.data))
  }

  const cart = useSelector(state => state.cart)

  return (
    <div className='cart'>
      <h2 className='cart__title'>My Cart</h2>
      <div className='cart__container'>
        {
          cart?.map(productCart => (
            <CartInfo
            key={productCart.id}
            productCart={productCart}
            />
            ))
        }
      </div>
      <button
        className='cart__btn'
        onClick={postPurchase}
      >Confirm Purchase</button>
    </div>  
  )
}

export default CartScreen
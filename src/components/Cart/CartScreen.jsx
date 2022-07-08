import axios from 'axios'
import React, { useEffect } from 'react'
import getConfig from '../../utils/getConfig'
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

  return (
    <div>
      <button onClick={postPurchase}>
        <h2>Post Purchase</h2>
      </button>

    </div>
  )
}

export default CartScreen
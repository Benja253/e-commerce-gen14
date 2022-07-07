import React from 'react'
import { useSelector } from 'react-redux'
import InputSearch from './InputSearch'
import ProductCard from './ProductCard'
import './style/homeScreen.css'

const HomeScreen = () => {


  const products = useSelector(state => state.products)

  console.log(products)

  

  return (
    <div className='home'>
      <InputSearch />
      <div className='products-container'>
        {
          products.map(product => (
            <ProductCard 
              key={product.id}
              product={product}
            />
          ))
        }
      </div>
    </div>
  )
}

export default HomeScreen
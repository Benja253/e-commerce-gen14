import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllproducts } from '../../store/slices/products.slice'
import InputSearch from './InputSearch'
import ProductCard from './ProductCard'
import './style/homeScreen.css'

const HomeScreen = () => {

  const dispatch = useDispatch()

  const products = useSelector(state => state.products)

  console.log(products)

  useEffect(() =>{
    dispatch(getAllproducts())
  }, []) 

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
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllproducts } from '../../store/slices/products.slice'

const HomeScreen = () => {

  const dispatch = useDispatch()

  const products = useSelector(state => state.products)

  console.log(products)

  useEffect(() =>{
    dispatch(getAllproducts())
  }, []) 

  return (
    <div>HomeScreen</div>
  )
}

export default HomeScreen
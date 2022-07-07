import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

const SimilarProducts = ({product}) => {

  const [filterProducts, setFilterProducts] = useState()

  const allProducts = useSelector(state => state.products)

  console.log(allProducts)

  useEffect(() => {
    if(allProducts.length !== 0){
      const filter = allProducts.filter(e => e.category.name === product.category)
      setFilterProducts(filter)
    }
  }, [product])

  console.log(filterProducts)

  return (
    <div>SimilarProducts</div>
  )
}

export default SimilarProducts
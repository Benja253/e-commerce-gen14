import React from 'react'
import { useNavigate } from 'react-router-dom'

const ProductCard = ({product}) => {

  const navigate = useNavigate()

  const goToProductId = () => navigate(`/product/${product.id}`)

  return (
    <article onClick={goToProductId} className='card-product'>
      <header className='card-product__header'>
        <img 
          className='card-product__img-back' 
          src={product.productImgs[1]} 
          alt="" 
        />
        <img 
          className='card-product__img' 
          src={product.productImgs[0]} 
          alt="" 
        />
      </header>
      <div className='card-product__body'>
        <h2 className='card-product__title'>{product.title}</h2>
        <div className='card-product__price-container'>
          <h3 className='card-product__price-label'>Price</h3>
          <p className='card-product__price-number'>$ {product.price}</p>
        </div>
        <button className='card-product__btn'>
          <i className="fa-solid fa-cart-plus"></i> 
        </button>
      </div>
    </article>
  )
}

export default ProductCard
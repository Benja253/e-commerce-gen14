import React from 'react'
import ProductsPurchase from './ProductsPurchase'

const PurchasesCard = ({purchase}) => {

  return (
    <article className='puchase-card'>
      <h3>{purchase.updatedAt}</h3>
      {
        purchase.cart.products.map(product => (
          <ProductsPurchase 
            key={product.id}
            product={product}
          />
        ))
      }
    </article>
  )
}

export default PurchasesCard
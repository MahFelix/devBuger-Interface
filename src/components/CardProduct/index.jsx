import React from 'react'
import { useNavigate } from 'react-router-dom'

import PropTypes from 'prop-types'

import { useCart } from '../../hooks/CartContext'
import { Button } from '../Button'
import { Container, Image, ProductName, ProductPrice } from './styles'

export function CardProduct({ product }) {
  const { putProductInCart } = useCart()
  const navigate = useNavigate()
  return (
    <Container>
      <Image
        src={`http://localhost:3001/product-file/${product.path}`}
        alt={`imagem do produto ${product.name}`}
      />
      <div>
        <ProductName>{product.name}</ProductName>
        <ProductPrice>{product.formatedPrice}</ProductPrice>
        <Button
          onClick={() => {
            putProductInCart(product)
            navigate('/carrinho')
          }}
        >
          Adicionar
        </Button>
      </div>
    </Container>
  )
}

CardProduct.propTypes = {
  product: PropTypes.object
}

import React from 'react'
import { useCartContext } from '../context/cart_context'

const CartContent = () => {
  const{cart,removeitem}=useCartContext()
  console.log(cart)
  console.log(cart[0].name)
  return (
    <div>
      hello
    </div>
  )
}

export default CartContent

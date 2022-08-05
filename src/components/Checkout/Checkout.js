import PayPalButton from '../PaypalButton/PaypalButton'
import React from 'react'

const Checkout = ({ order = [
  { name: "Hamburguesa", price: 50 },
  { name: "Hot-Dog", price: 30 },
  { name: "Papas", price: 20 },
] }) => {
  const total = order.reduce((acc, val) => acc + val.price, 0)
  return (
    <div>
      {order.map((product, index) => (
        <p key={index}>{`${product.name} - ${product.price}`}</p>
      ))}
      {total}

      <PayPalButton currency="MXN" amount={total} />

    </div>
  )
}

export default Checkout

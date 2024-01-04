import React from 'react'
import { useSelector } from 'react-redux'
const BasketComponent = ({basketTop}) => {
    const {basket} = useSelector(state => state.Basket)
    const items = basket.reduce((acc, basketTop) => acc += basketTop.price, 0)
  return (
    <>
    <div style={{margin: '10px', display: 'flex', justifyContent: 'space-between'}}>
        <p style={{color: 'white'}}>{basketTop.title}</p>
        <p style={{color: 'white'}}>{basketTop.price} $</p>
    </div>
    </>
  )
}

export default BasketComponent
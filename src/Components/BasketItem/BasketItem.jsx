import React from 'react'
import { useSelector } from 'react-redux'
import BasketComponent from '../BasketComponent/BasketComponent'
import './Style.css'
const BasketItem = () => {
    const {basket} = useSelector(state => state.Basket)
    const items = basket.reduce((acc, basket) => acc += basket.price, 0)
  return (
    <div className='block'>
        <div className='block__1'>
            {basket.map(basketTop => 
            <>
            <BasketComponent key={basketTop.id} basketTop = {basketTop} />
            </>
            )}
            <p style={{color: 'white', marginLeft: 20}}>Итого к оплате {items} $</p>
        </div>
    </div>
  )
}

export default BasketItem
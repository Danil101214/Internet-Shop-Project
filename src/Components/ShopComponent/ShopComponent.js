import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Basket, BasketDelete, shopFetch } from '../../Actions/axios'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './Style.css'
import { useNavigate, useParams } from 'react-router-dom';
import { SHOE } from '../Constants';
import { BasketSlice } from '../../Redux/Slice/BasketSlice';
const ShopComponent = ({shopTop}) => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const {basket} = useSelector(state => state.Basket)
  const isItemsBasket = basket.some(item => item.id == basket.id)
  //const {id} = useParams()
 /* useEffect(() => {
    dispatch(Basket(id))
  }, [dispatch, id])*/
  const handleClick = (event) => {
   // event.preventDefault()
   if(isItemsBasket) {
    dispatch(Basket(shopTop.id)) 
  } else {
    dispatch(BasketSlice.actions.fetchIsDelete(shopTop))
  }
}
  return (
    <div className='top' style={{maxWidth: '500px', maxHeight: '100%'}}>
      <img src={shopTop.images} style={{cursor: 'pointer'}} onClick={() => navigate(`/shop/${shopTop.id}`)}/>
        <h1>{shopTop.title}</h1>
        <p>{shopTop.description}.</p>
        <p>Category: {shopTop.category.name}</p>
        <p>{shopTop.price} $</p>
        <Button variant="primary" onClick={() => handleClick()}>{isItemsBasket ? 'Убрать из корзины' : 'Купить'}</Button>
    </div>
  )
}
export default ShopComponent
import React, { useState } from 'react'
import amazon from '../../Assets/amazon.jpeg'
import { ABOUTUS, component, CREATE_SHOE } from '../Constants'
import './Style.css'
import {BsFillBasket2Fill} from 'react-icons/bs'
import {NavLink, Link} from 'react-router-dom'
import { AUTH, PERSONAL } from '../Constants'
import { Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import {AuthSlice} from '../../Redux/Slice/AuthSlice'
import BasketItem from '../BasketItem/BasketItem'
import personal from '../../Assets/personal.jpg'
const Navbar = () => {
  const [dropdown, serDropdown] = useState(false)
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const {isAuth, name} = useSelector(state => state.Auth)
  const [show, setShow] = useState(false)
  const {basket} = useSelector(state => state.Basket)
  const logOutHandler = (event) => {
    event.preventDefault()

    dispatch(AuthSlice.actions.logout())
  }
  return (
    <div className='navbar-Top'>
      <div className="navbar__container">
        <div className="navbar__block_1">
          <h1 onClick={() => navigate(ABOUTUS)} style={{color: 'white', marginTop: 10, cursor: 'pointer'}}>Amazon</h1>
        </div>
        <div className="navbar__block_2">
          <ul style={{display: 'flex',flexWrap: 'wrap', margin: 20}}>
          {component.map(title => 
            <NavLink key={title.id} to={title.to} style={{color: 'White', textDecoration: 'none', margin: 10,}}>{title.title}</NavLink>)}
            </ul>
        </div>
        <div className="navbar__block_3">
        {basket.length >= 0 &&
        <>
        <BsFillBasket2Fill className='bs' onClick={() => setShow(!show)}/> 
        </>
        }
        {show && <BasketItem />}
        {isAuth &&
          <Button variant='outline-success'style={{height: 50, margin: -10, marginRight: 10}} onClick={() => navigate(CREATE_SHOE)}>Добавить Товар</Button>
        }
        {isAuth &&
        <div style={{/*marginTop: 30*/}}>
          <div className='topBottom' style={{display: 'flex', flexWrap: 'wrap'}}>
          <div style={{display: 'flex', flexWrap: 'wrap', marginRight: 5, backgroundColor: 'white', width: 20, height: 20, borderRadius: 20, cursor: 'pointer'}} onClick={() => serDropdown(!dropdown)}></div>
          <div style={{color: 'white'}}>{name}</div>
          </div>
          {dropdown && 
          <div className='dropdown'>
            <div className='block__1'>
              <img src={personal} alt="" width={30} height={30} style={{margin: 5, cursor: 'pointer', borderRadius: 10}}/>
          <p style={{color: 'black', cursor: 'pointer', marginTop: 10}} title="Личный кабинет" onClick={() => navigate(PERSONAL)}>Личный кабинет</p>
          </div>
          <div className='block__1'>
          <a href='#' onClick={logOutHandler} style={{color: 'black', margin: 10, textDecoration: 'none', cursor: 'pointer'}}>Выйти</a>
          </div>
          </div>
          }
        </div>}
        {!isAuth && <NavLink style={{textDecoration: 'none', marginLeft: 10, color: 'black', marginTop: 10}} to={AUTH}><Button variant='success' className='button-top'>Авторизоваться</Button></NavLink>}
        </div>
      </div>
      </div>
  )
}

export default Navbar
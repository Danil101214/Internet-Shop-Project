import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { register } from '../../Actions/axios'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import {useNavigate} from 'react-router-dom'
import { AUTH, REGISTER, SHOP } from '../../Components/Constants'
import Spinner from '../../Components/Spinner/Spinner'
import './Style.css'
const Auth = () => {
  const [loading, setLoading] = useState(true)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [role, setNumber] = useState('')
  const [password, setPassword] = useState('')
  const [avatar, setPassword_repeat] = useState('')
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const isFormValid = () => name && email && password
  const submitHandler = (e) => {
    e.preventDefault()
    if(isFormValid()) {
      dispatch(register({name: name, email: email, password: password})).then(() => {
        navigate(SHOP)
      })
    }
  }
  useEffect(() => {
    setTimeout(() => {
        setLoading(false)
    }, 2000)
  })
  return (
    <>
    {loading ? <Spinner /> :
    <div>
    <form onSubmit={submitHandler} style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', width: '100%'}}>
      <div className='form' style={{border: '1px solid black', borderRadius: 10, padding: 10, marginTop: 10}}>
      <h1 style={{textAlign: 'center'}}>Зарегистрироваться</h1>
      <div style={{display: 'flex', flexDirection: 'column', margin: 10}}>
        <label htmlFor="name" style={{fontWeight: 600, fontSize: 20}}>Name</label>
        <input className='input' type="text" onChange={(event) => setName(event.target.value)} style={{width: 400, borderRadius: 10, border: '1px solid grey', height: 40, display: 'flex', justifyContent: 'center'}}/>
      </div>
      <div style={{display: 'flex', flexDirection: 'column', margin: 10}}>
        <label htmlFor="email" style={{textAlign: 'left', fontWeight: 600, fontSize: 20}}>Email</label>
        <input className='input'  type="email" onChange={(event) => setEmail(event.target.value)} style={{width: 400, borderRadius: 10, border: '1px solid grey', height: 40}}/>
      </div>
      <div style={{display: 'flex', flexDirection: 'column', margin: 10}}>
        <label htmlFor="password" style={{textAlign: 'left', fontWeight: 600, fontSize: 20}}>Password</label>
        <input className='input'  type="password" onChange={(event) => setPassword(event.target.value)} style={{width: 400, borderRadius: 10, border: '1px solid grey', height: 40}}/>
      </div>
      <div style={{display: 'flex', justifyContent: 'space-between'}}>
        <p>Имеешь аккаунт? <Link to={REGISTER}>Войди</Link></p>
      <Button type='submit' variant='outline-primary' onClick={submitHandler}>Зарегистрироваться</Button>
      </div>
      </div>
    </form>
    </div>
    }
    </>
  )
}

export default Auth
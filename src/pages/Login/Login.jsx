import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { login, register } from '../../Actions/axios'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import {useNavigate} from 'react-router-dom'
import { AUTH, PERSONAL } from '../../Components/Constants'
import Spinner from '../../Components/Spinner/Spinner'
import './Style.css'
const Login = () => {
  const [loading, setLoading] = useState(true)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const isFormValid = () => name && email && password
  const submitHandler = (event) => {
    event.preventDefault()
    if(isFormValid()) {
      dispatch(login({name: name, email: email, password: password})).then(() => {
        navigate(PERSONAL)
      })
    } else {
      alert('Ошибка')
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
      <div className='form1' style={{border: '1px solid black', borderRadius: 10, padding: 10, marginTop: 10}}>
      <h1 style={{textAlign: 'center'}}>Вход</h1>
      <div style={{display: 'flex', flexDirection: 'column', margin: 10}}>
        <label htmlFor="name" style={{fontWeight: 600, fontSize: 20}}>Name</label>
        <input className='input1' type="text" onChange={(event) => setName(event.target.value)} id="name" style={{width: 400, borderRadius: 10, border: '1px solid grey', height: 40}}/>
      </div>
      <div style={{display: 'flex', flexDirection: 'column', margin: 10}}>
        <label htmlFor="email" style={{textAlign: 'left', fontWeight: 600, fontSize: 20}}>Email</label>
        <input className='input1' type="email" onChange={(event) => setEmail(event.target.value)} id="email" style={{width: 400, borderRadius: 10, border: '1px solid grey', height: 40}}/>
      </div>
      <div style={{display: 'flex', flexDirection: 'column', margin: 10}}>
        <label htmlFor="password" style={{textAlign: 'left', fontWeight: 600, fontSize: 20}}>Password</label>
        <input className='input1' type="password" onChange={(event) => setPassword(event.target.value)} id="password" style={{width: 400, borderRadius: 10, border: '1px solid grey', height: 40}}/>
      </div>
      <div style={{display: 'flex', justifyContent: 'space-between'}}>
        <p>Не Имеешь аккаунта? <Link to={AUTH}>Зарегистрируйся</Link></p>
      <Button type='submit' variant='outline-primary' onClick={submitHandler}>Войти</Button>
      </div>
      </div>
    </form>
    </div>
    }
    </>
  )
}

export default Login
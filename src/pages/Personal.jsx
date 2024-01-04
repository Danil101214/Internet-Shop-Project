import React, {useEffect, useState} from 'react'
import { useSelector } from 'react-redux'
import {useNavigate} from 'react-router-dom'
import { SHOP } from '../Components/Constants'
import Spinner from '../Components/Spinner/Spinner'
const Personal = () => {
    const [loading, setLoading] = useState(true)
    const {name, password, email} = useSelector(state => state.Auth)
    const navigate = useNavigate()
    if(!name, !password, !email) {
        navigate(SHOP)
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
    <h1>Ваш личный кабинет</h1>
    <div>
        <p>Ваше имя: {name}</p>
        <p>Ваша почта: {email}</p>
        <p>Ваш пароль (запомните его): {password}</p>
    </div>
    </div>
    }
    </>
  )
}

export default Personal
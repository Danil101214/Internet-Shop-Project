import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import useDebounce from '../../hooks/Debounse'
import useInput from '../../hooks/Input'
import { useNavigate } from 'react-router-dom'
import './Style.css'
const Sorting = () => {
    const input = useInput('')
    const dispatch = useDispatch()
    const [shoe, setShoe] = useState([])
    const [remove, setRemove] = useState(false)
    const debounsed = useDebounce(input.value, 300)
    const navigate = useNavigate()
    async function searchShoe() {
        const response = await axios.get(`https://api.escuelajs.co/api/v1/products/`, {params: {search: debounsed}, length: 10})
        setShoe(response.data)
    }
    useEffect(() => {
        if(debounsed.length >= 2) {
            searchShoe().then(() => setRemove(true))
        } else {
            setRemove(false)
        }
        console.log('debponsed', debounsed)
    }, [debounsed])
    const search = shoe.filter(shoeButton => {
        return shoeButton.title.toLowerCase().includes(input.value.toLowerCase())    })

    return (
    <div style={{display: 'flex', justifyContent: 'center', transition: '2s'}}>
        <input type='search' {...input} className='input' placeholder='Введите название товара'/>
        <ul className='shoe__ul'>
            {remove && search.map(type => 
                <div className='container__bottom'>
                <li className='shoe__li' onClick={() => navigate(`/shop/${type.id}`)}>{type.title}</li>
                <img className='image__top' src={type.images} onClick={() => navigate(`/shop/${type.id}`)}/>
                </div>
            )}
        </ul>
    </div>
  )
}

export default Sorting
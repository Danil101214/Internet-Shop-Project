import React, { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import {CreateShoeTop, shopFetch} from '../../Actions/axios'
import { SHOP } from '../../Components/Constants'
import { useNavigate } from 'react-router-dom'
import Spinner from '../../Components/Spinner/Spinner'
import './Style.css'
const CreateShoe = () => {
  const {id} = useSelector(state => state.CreateShoe)
  const navigate = useNavigate()
  const [loading, setLoading] = useState(true)
  const [title, setTitle] = useState('')
  const [price, setPrice] = useState(0) 
  const [description, setDescription] = useState('') 
  const [categoryId, setCategoryId] = useState('')
  const [images, setImages] = useState(null)
  const dispatch = useDispatch()
  const isFormValid = () => {
    return title && price && description && categoryId && images
  }

 /* const handleClick = useCallback((event) => {
    event.preventDefault()
    const formData = new FormData()
    formData.append('title', title)
    formData.append('price', price)
    formData.append('description', description)
    formData.append('category', category)

    dispatch(CreateShoeTop(formData)).then(res => {
      navigate(`shoe/${res.payload._id}`)
    })
})*/
  const buttonHandler = (event) => {
    event.preventDefault()
    if(isFormValid()) {
      dispatch(CreateShoeTop({title: title, price: price, description: description, categoryId: categoryId, images: images})).then(() => {
        navigate(SHOP)
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
    <div className='Create__container'>
      <form onSubmit={buttonHandler} className="formTop">
        <div className='blockTop'>
        <label htmlFor="title" style={{fontWeight: 600, fontSize: 20}}>Название товара</label>
        <input className='input2' style={{width: 500, height: 40, borderRadius: 20}} type='text' placeholder='Введите название товара' onChange={(event) => setTitle(event.target.value)}/>
        </div>
        <div className='blockTop'>
        <label htmlFor="title" style={{fontWeight: 600, fontSize: 20}}>Цена товара</label>
        <input className='input2' style={{width: 500, height: 40, borderRadius: 20}} type='number' placeholder='Введите цену товара' onChange={(event) => setPrice(event.target.value)}/>
        </div>
        <div className='blockTop'>
        <label htmlFor="title" style={{fontWeight: 600, fontSize: 20}}>Описание товара</label>
        <textarea className='input2' style={{width: 500, borderRadius: 20}}  placeholder='Введите описание товара' onChange={(event) => setDescription(event.target.value)}/>
        </div>
        <div className='blockTop'>
        <label htmlFor="title" style={{fontWeight: 600, fontSize: 20}}>Категория товара</label>
        <input className='input2' style={{width: 500, height: 40, borderRadius: 20}} type='number' placeholder='Введите категорию товара' onChange={(event) => setCategoryId(event.target.value)}/>
        </div>
        <div className='blockTop'>
        <label htmlFor="file" style={{fontWeight: 600, fontSize: 20}}>Фото товара</label>
        <input className='input2' style={{width: 500}} type="file" placeholder='фото товара' onChange={(event) => setImages(event.target.files)}/>
        </div>
        <Button onClick={buttonHandler}>Создать</Button>
      </form>
    </div>
    }
    </>
  )
}

export default CreateShoe
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { categoryFetch } from '../../Actions/axios'
import { ShopSlice } from '../../Redux/Slice/ShopSlices'

const Category = () => {
    const dispatch = useDispatch()
    const {category, isLoading} = useSelector(state => state.Category)
    const [hasFilter, setHasFilter] = useState(false)
    const [filter, setFilter] = useState({
        category: ''
    })

    const changeHandler = () => [
        setFilter({
            category: ''
        })
    ]
    const clearHandler = () => {
        return filter.category
    }
    const changeCategory = (event) => {
        setFilter(prev => ({...prev, [event.target.name]: event.target.value}))
    }
    useEffect(() => {
        dispatch(categoryFetch())
    }, [dispatch])  

    useEffect(() => {
        if(clearHandler()) {
            setHasFilter(true)
        } else {
            setHasFilter(false)    
        }
    }, [filter])
    if(isLoading) {
        return <p>Загрузка...</p>
    }
  return (
    <div>
        <select style={{marginTop: 10}} name='category' value={filter.category} onChange={changeCategory}>
        <option value='' disabled>Категория</option>  
        {category && category.map(c =>
        <option key={c.id} name='shoe'>{c.name}</option>
        )}
        </select>
        {hasFilter && <button onClick = {changeHandler}>Удалить</button>}
    </div>
  )
}

export default Category
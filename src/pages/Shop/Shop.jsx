import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { shopFetch } from '../../Actions/axios'
import Category from '../../Components/Category/Category'
import ShopComponent from '../../Components/ShopComponent/ShopComponent'
import Sorting from '../../Components/Sorting/Sorting'
import Spinner from '../../Components/Spinner/Spinner'
import './Style.css'

const Shop = () => {
    const dispatch = useDispatch()
    const [page, setPage] = useState(1)
    const {shop, isLoading, length} = useSelector(state => state.Shop)
    useEffect(() => {
        dispatch(shopFetch())
    }, [dispatch])
    if(isLoading) {
      return <Spinner />
    }
  return (
    <>
    <Sorting />
    <Category />
    <div className='shoe'>
      {shop && shop.map(shopTop => 
        <ShopComponent key={shopTop.id} shopTop={shopTop}/>
      )}
    </div>
    </>
  )
}
export default Shop
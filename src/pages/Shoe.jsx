import React, { useEffect } from 'react'
import Spinner from '../Components/Spinner/Spinner'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { shoeFetch } from '../Actions/axios'
import {Button} from 'react-bootstrap'
const Shoe = () => {
  const {id} = useParams()
  const dispatch = useDispatch()
  const {shoe, isLoading} = useSelector(state => state.ShoeTop)
  useEffect(() => {
    dispatch(shoeFetch(id))
  }, [dispatch, id])
    if(isLoading) {
      return <Spinner />
    }
  return shoe && (
    <div style={{display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap'}}>
     <div className='top' style={{maxWidth: '500px', margin: 10}}>
        <img src={shoe.images} />
        <h1>{shoe.title}</h1>
        <p>{shoe.description}.</p>
        <p>{shoe.price} $</p>
        <Button variant="primary">Купить</Button>
    </div>
    <iframe style={{marginTop: '80px'}} width="800" height="500" src="https://www.youtube.com/embed/uoKsY9HDk6o" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>
  )
}

export default Shoe
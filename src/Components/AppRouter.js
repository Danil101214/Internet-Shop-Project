import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { AuthPage, publicPage } from '../Route'
import {useSelector} from 'react-redux'
const AppRouter = () => {
   const {isAuth} = useSelector(state => state.Auth)
  return (
    <div style={{flex: '1 1 auto'}}>
    <Routes>
        {isAuth && AuthPage.map(({path, element}) =>
            <Route path={path} element={element} />
        )}
        {publicPage.map(({path, element}) => 
        <Route path={path} element={element} />
        )}
        </Routes>
    </div>
  )
}

export default AppRouter
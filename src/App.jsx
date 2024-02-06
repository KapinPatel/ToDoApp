import React, { useState } from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Home from './Component/Home'
import CreateUser from './Component/CreateUser'
import Users from './Component/Users'
import Edit from './Component/Edit'

const App = () => {
  return (
    <div>
        <BrowserRouter>
        <Home/>
            <Routes>
                <Route element={<Edit/>} path='/Edit/:ab' />
                <Route element={<CreateUser />} path='/'/>
                <Route element={<Users/>} path='/users'/>
            </Routes>
        </BrowserRouter>
    </div>
  )
}

export default App
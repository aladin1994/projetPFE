import React, { useState } from 'react'
import Sidebar from './Sidebar'
import { Route, Routes } from 'react-router-dom'
import ArticleList from './ArticleList'
import Navigation from './Naviagtion' 
const Home = () => {
    
  return (
    <div className='home' >
    <Navigation />
    
    <Sidebar>
      <Routes>
      <Route path='/article' element={<ArticleList/>}/>
      </Routes>
      
    </Sidebar>
    
    </div>
  )
}

export default Home

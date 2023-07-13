import React from 'react'
import Sidebar from './Sidebar'
import { Route, Routes } from 'react-router-dom'
import ArticleList from './ArticleList'
import Navigation from './Naviagtion' 
import PersonelList from './PersonelList'
import FactureList from './FactureList'
const Home = () => {
    
  return (
    <div className='home' >
    <Navigation />
    
    <Sidebar>
      <Routes>
      <Route path='/article' element={<ArticleList/>}/>
      <Route path='/personel' element={<PersonelList/>} />
      <Route path='/facture' element={<FactureList/>} />
      </Routes>
      
    </Sidebar>
    
    </div>
  )
}

export default Home

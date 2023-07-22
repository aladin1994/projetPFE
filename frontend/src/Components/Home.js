import React from 'react'
import Sidebar from './Sidebar'
import { Route, Routes } from 'react-router-dom'
import ArticleList from './ArticleList'
import Navigation from './Naviagtion'
import PersonelList from './PersonelList'
import FactureList from './FactureList'
import Stock from './Stock'
import {  useSelector } from 'react-redux'

const Home = () => {
 
  const factures = useSelector(state => state.FactureReducer.factures)
  const articles = useSelector(state => state.ArticleReducer.articles)


  return (
    <div className='home' >
      <Navigation />
  
      <Sidebar>
        <Routes>
          <Route path='/article' element={<ArticleList articles={articles}/>} />
          <Route path='/personel' element={<PersonelList />} />
          <Route path='/facture' element={<FactureList factures={factures}/>} />
          <Route path='/' element={<Stock factures={factures} articles={articles}/>} />
        </Routes>

      </Sidebar>

    </div>
  )
}

export default Home

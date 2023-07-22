import React, { useEffect, useState } from 'react'
import '../Components/Style/StockStyle.css'
import serach from '../Components/imgs/search.png';
import notifi from '../Components/imgs/notifi.png'
import userImage from '../Components/imgs/user.jpg'
import store from '../Components/imgs/store.jpg'
import { useDispatch } from 'react-redux';
import { Get_Facture } from '../redux/Action/FactureAction';
import Spinner from 'react-bootstrap/Spinner';
import { Get_article } from '../redux/Action/ArticleAction';

const Stock = ({factures, articles}) => {
  const [loading, setLoading] = useState(true)
  const dispatch = useDispatch()
  useEffect(() => {

setTimeout(() => {
  dispatch(Get_Facture(),Get_article(),  setLoading(false))



}, 1000);


}, [dispatch])


  return (
    <div>
      <div className="container">
        <div className="header">
          <div className="nav">
            <div className="search">
              <input type="text" placeholder='Search ...' />
              <button type='submit'><img src={serach} alt="404" /></button>
            </div>
            <div className="user">
              <a href="" className='btn1' >Add New</a>
              <img src={notifi} alt="404" />
              <div className="img-case">
                <img src={userImage} alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className="content1">

          <div className="cards">
            <div className="card">
              <div className="box">
                <h1>2196</h1>
                <h3>Student</h3>
              </div>
              <div className="icon-case">
                <img src={store} alt="" />
              </div>
            </div>
            <div className="card">
              <div className="box">
                <h1>2196</h1>
                <h3>Student</h3>
              </div>
              <div className="icon-case">
                <img src={store} alt="" />
              </div>
            </div>
            <div className="card">
              <div className="box">
                <h1>2196</h1>
                <h3>Student</h3>
              </div>
              <div className="icon-case">
                <img src={store} alt="" />
              </div>
            </div>
            <div className="card">
              <div className="box">
                <h1>2196</h1>
                <h3>Student</h3>
              </div>
              <div className="icon-case">
                <img src={store} alt="" />
              </div>
            </div>
          </div>
          <div className="content-2">
            <div className="racement-payant">
              <div className="title">
                <h2>Recent Payments</h2>
                <a href="#" className='btn1'>View All </a>
              </div>
              <table>
                <tr>
                  <th>Client</th>
                  <th>Caissier</th>
                  <th>Montant</th>
                  <th>Date</th>
                  <th>Option</th>
                </tr>
                {
                  loading ? <Spinner animation="border" role="status">
                    <span className="visually-hidden">Loading...</span>
                  </Spinner> : factures.map((el, index) =>
                    <tr>
                      <td>
                        {el.client}
                      </td>
                      <td>
                        {el.caissier}
                      </td>
                      <td>
                        {el.montant}
                      </td>
                      <td>
                        {el.date}
                      </td>
                      <td>
                        <a href="#" className='btn1'>View</a>
                      </td>
                    </tr>

                  )

                }

              </table>
            </div>
            <div className="new-article">
              <div className="title">
                <h2>New Article</h2>
                <a href="#" className='btn1'>View All </a>
              </div>
              <table>
                <tr>
                  <th>Name</th>
                  <th>Price</th>
                  <th>Category</th>
                  <th>Option</th>
                </tr>
                {

                  loading ? <Spinner animation="border" role="status">
                    <span className="visually-hidden">Loading...</span>
                  </Spinner> : articles?.map((el, index) =>
                  <tr>
                  <td>
                      {el.name}
                    </td>
                    <td> 
                      {el.price}
                    </td>
                    <td> 
                      {el.subject}
                    </td>
                    <td>
                        <a href="#" className='btn1'>View</a>
                      </td>
                  </tr>  
                  
                    )

                }






              </table>
            </div>
          </div>
        </div>


      </div>

    </div>
  )
}

export default Stock

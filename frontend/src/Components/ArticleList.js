import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from "react-redux"
import { Get_article } from '../redux/Action/ArticleAction'
import ArticlesCard from './ArticlesCard'
import Spinner from 'react-bootstrap/Spinner';
import './ArticleListStyle.css'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import AddArticle from './AddArticle'
const ArticleList = () => {
  const [loading, setLoading] = useState(true)
  const dispatch = useDispatch()
  const articles = useSelector(state => state.ArticleReducer.articles)
  useEffect(() => {
    setTimeout(() => {
      dispatch(Get_article(), setLoading(false), setTotalArticle(articles.length))

    }, 1000);


  }, [dispatch])

  console.log(articles)
  const [search, setSearch] = useState('')
  const [totalArticle, setTotalArticle] = useState("Loading...")
  return (
    <div className='interface'>
      <div className="navigation">
        
        <p>Total: {totalArticle}</p>
        <AddArticle />
        <Form className="d-flex">
        <Form.Control
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
          onChange={(e) => setSearch(e.target.value)}
        />
        <Button variant="outline-success">Search</Button>
      </Form>
        
        </div>
      

      
      <div style={{ display: 'flex', justifyContent: "center", alignItems: "center", margin: "5%", gap: "10px", flexWrap: "wrap" }}>

        {
          loading ? <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>

          </Spinner> : articles?.filter((el) => el.name.toUpperCase().includes(search.toUpperCase()))?.map((el) => <ArticlesCard key={el._id} el={el} />)

        }
      </div>
    </div>
  )
}

export default ArticleList
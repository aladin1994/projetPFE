import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from "react-redux"
import { Get_article } from '../redux/Action/ArticleAction'
import ArticlesCard from './ArticlesCard'
import Spinner from 'react-bootstrap/Spinner';
import './ArticleListStyle.css'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import AddArticle from './AddArticle'
import 'react-multi-carousel/lib/styles.css';
import Slider from "react-slick";
const ArticleList = () => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  const [loading, setLoading] = useState(true)
  const dispatch = useDispatch()
  const articles = useSelector(state => state.ArticleReducer.articles)
  useEffect(() => {
    setTimeout(() => {
      dispatch(Get_article(), setLoading(false),setTotalArticle(articles.length))

    }, 1000);


  }, [dispatch])

  const [search, setSearch] = useState('')
  const [totalArticle,setTotalArticle] = useState("Loading...")
  return (
    <div className='interface'>
      <div className="navigation">

        <p>Total articles: {totalArticle}</p>
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
      
       
        <Slider {...settings}>
        
        {
          loading ? <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>

          </Spinner> : articles?.filter((el) => el.name.toUpperCase().includes(search.toUpperCase()))?.map((el) => <ArticlesCard key={el._id} el={el} />)

        }
        
        </Slider>
      








    </div>
  )
}

export default ArticleList
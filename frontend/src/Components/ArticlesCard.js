import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { useDispatch } from 'react-redux';
import { Delete_article, Edit_article } from '../redux/Action/ArticleAction';
import './ArticleCardStyle.css'
const ArticlesCard = ({ el }) => {
  const dispatch = useDispatch()
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [name, setName] = useState(el?.name)
  const [image, setImage] = useState(el?.image)
  const [subject, setSubject] = useState(el?.subject)
  const [price, SetPrice] = useState(el?.price)
  const handleEdit = () => {
    dispatch(Edit_article(el._id, { name, image, subject, price }), handleClose(), window.location.reload())
  }
  return (
    <div>
      <div className='gallery'>
        <div className="content">
          <img src={el?.image} alt="404" />
          <h3>{el?.name}</h3>
          <h6>{el?.price}</h6>
          <p>{el?.subject}</p>
          


          <Button className='btn_edite' onClick={handleShow}>
            Edit
          </Button>
          <Button className='btn_delete' onClick={() => dispatch(Delete_article(el._id), window.location.reload())}>Delete</Button>

        </div>
      </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Article</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group className="mb-3" controlId="formBasic">
            <Form.Label>image</Form.Label>
            <Form.Control type="text" placeholder="Enter image" onChange={(e) => setImage(e.target.value)}
              value={image} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>name</Form.Label>
            <Form.Control type="text" placeholder="Enter name" onChange={(e) => setName(e.target.value)}
              value={name}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmai">
            <Form.Label>subject</Form.Label>
            <Form.Control type="text" placeholder="Enter subject" onChange={(e) => setSubject(e.target.value)}
              value={subject}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmai">
            <Form.Label>Price</Form.Label>
            <Form.Control type="text" placeholder="Enter Price" onChange={(e) => SetPrice(e.target.value)}
              value={price}
            />
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleEdit}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>

    </div>
  )
}

export default ArticlesCard
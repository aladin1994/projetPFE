import React, { useEffect } from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { useDispatch } from 'react-redux';
import { Add_article } from '../redux/Action/ArticleAction';
const AddArticle = () => {
  const options = [
    { value: 'Automotive and Transport', label: 'Automotive and Transport' },
    { value: 'Business and Finance', label: 'Business and Finance' },
    { value: 'Energy and Natural Resources', label: 'Energy and Natural Resources' },
    { value: 'Food and Beverage', label: 'Food and Beverage' },
    { value: 'Telecommunications and Computing', label: 'Telecommunications and Computing' },
    { value: 'Pharmaceuticals', label: 'Pharmaceuticals' },
    { value: 'Humanities Books', label: 'Humanities Books' },
    { value: 'Industry', label: 'Industry' },
    { value: 'Meuble', label: 'Meuble' },

];
    const [values , setValues]= useState([]) 
    
    useEffect(() => {
      setValues(options)
    }, [])
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const dispatch=useDispatch()
    const[name,setName]=useState("")
    const[image,setImage]=useState("")
    const[subject,setSubject]=useState("")
    const [price,SetPrice]=useState(0)
    const handleAdd=()=>{
        dispatch(Add_article({name,image,subject,price}),handleClose(),handleClose(), window.location.reload())
    }
  return (
    <div>
    <Button variant="primary" style={{borderRadius:"25%" , width:"120px"}} onClick={handleShow}>
        Add Article
    </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Article</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form.Group className="mb-3" controlId="formBasic">
        <Form.Label>image</Form.Label>
        <Form.Control type="text" placeholder="Enter image" onChange={(e)=>setImage(e.target.value)} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>name</Form.Label>
        <Form.Control type="text" placeholder="Enter name" onChange={(e)=>setName(e.target.value)} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmai">
        <Form.Label>subject</Form.Label>
        <Form.Select  onChange={(e)=>setSubject(e.target.value)}>
        {
          values.map((opt , i)=><option>{opt.value}</option>)
        }
      </Form.Select>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmai">
        <Form.Label>¨Price</Form.Label>
        <Form.Control type="Number" placeholder="Enter Price" onChange={(e)=>SetPrice(e.target.value)} />
      </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleAdd}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default AddArticle
import React, { useEffect, useState } from 'react'
import './Style/PersonelCardStyle.css'
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const PersonelCard = ({ el }) => {
  const options = [
    { value: 'Active', label: 'Active' },
    { value: 'Inactive', label: 'Inactive'},
  ];
  const [values , setValues]= useState([]) ;

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [name, setName] = useState("");
  const [title, setTitle] = useState("");
  const [setStatue] = useState("");
  const [role, setRole] = useState("");
  // const handleEdit = () => {
  //   dispatch(Edit_facture(el._id, { name, title, statue, role}), handleClose(), window.location.reload())
  // }
  useEffect(() => {
    setValues(options)
  }, [])
  return (
    <tr className='personel-ligne'>

      <td className='personel'>

        <img className='personel-image' src={el?.image} alt="404" />
        <div className="people_de">
          <h5 className='personel-txt'>{el?.name}</h5>
          <p>email@gmail.com</p>
        </div>
      </td>
      <td>
        <div className="people_des">
          <h5 className='personel-txt'>{el?.title}</h5>
        </div>
      </td>
      <td className='active-personel'><p>Active</p></td>
      <td className="role"><p>Owner</p></td>
      <td className='edit-personel'><a href="#">Edite</a></td>

      <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Edit Personel</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form.Group className="mb-3" controlId="formBasic">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="Enter name" onChange={(e) => setName(e.target.value)}
            value={name} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Titre</Form.Label>
          <Form.Control type="text" placeholder="Enter caissier" onChange={(e) => setTitle(e.target.value)}
            value={title}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmai">
          <Form.Label>Statue</Form.Label>
          <Form.Select  onChange={(e)=>setStatue(e.target.value)}>
          {
            values.map((opt , i)=><option>{opt.value}</option>)
          }
        </Form.Select>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmai">
          <Form.Label>Role</Form.Label>
          <Form.Control type="text" placeholder="Enter role" onChange={(e) => setRole(e.target.value)}
            value={role}
          />
        </Form.Group>
        
        
        
        
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
          <Button variant="primary" >{ /*onClick={handleEdit}*/}
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>

    </tr>
  )
}

export default PersonelCard

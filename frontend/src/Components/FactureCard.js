import React, { useState } from 'react'

import '../Components/Style/FactureCardStyle.css'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import Modal from 'react-bootstrap/Modal';

import { useDispatch } from 'react-redux';
import { Delete_facture, Edit_facture } from '../redux/Action/FactureAction';
import Alert from 'react-bootstrap/Alert';
import DatePiker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css'
const FactureCard = ({ el }) => {

  const payeeStyle = {
    backgroundColor: "#27AE60",
    color: "#080707",
    padding: "5px",
    textAlign: "center",
  };
  const factureeStyleValid = {
    color: "#080707",
    backgroundColor: "#E90B19 ",
    padding: "5px",
    textAlign: "center",
  };
  const dispatch = useDispatch()

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [client, setClient] = useState(el?.client);
  const [caissier, setCaissier] = useState(el?.caissier);
  const [montant, setMontant] = useState(el?.montant);
  const [percu, setPercu] = useState(el?.percu);
  const [rendu, setRendu] = useState(el?.rendu);
  const [etat, setEtat] = useState(el?.etat);
  const handleEdit = () => {
    dispatch(Edit_facture(el._id, { client, caissier, montant, percu, rendu, etat }), handleClose(), window.location.reload())
  }
  let today = el?.date;

  function get_date() {
    let date = today.slice(0, 10);
    let nDate = date.slice(8, 10) + '/'
      + date.slice(5, 7) + '/'
      + date.slice(0, 4);
    return nDate;
  }
  const [selectedDate, setSelectedDate] = useState(null)
  

  return (
    <tr className="facture-ligne">

      <td>{el?.client}</td>
      <td>{el?.caissier}</td>
      <td>{el?.montant}</td>
      <td>{el?.percu <= el?.montant ? el?.percu :
        <Alert variant={"danger"}>
          Error facture *
          change your facture
        </Alert>
      }</td>
      <td>{el?.montant - el?.percu}</td>
      <td style={el?.montant === el?.percu ? payeeStyle : factureeStyleValid}>{el?.etat}</td>
      <td>
       {get_date()}
      </td>

      <td>

        <Button className='btn_edite' onClick={handleShow}>
          Edit
        </Button>
        <Button className='btn_delete' onClick={() => dispatch(Delete_facture(el._id), window.location.reload())}>
          Delete
        </Button>


      </td>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Facture</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group className="mb-3" controlId="formBasic">
            <Form.Label>Client</Form.Label>
            <Form.Control type="text" placeholder="Enter client" onChange={(e) => setClient(e.target.value)}
              value={client} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Caissier</Form.Label>
            <Form.Control type="text" placeholder="Enter caissier" onChange={(e) => setCaissier(e.target.value)}
              value={caissier}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmai">
            <Form.Label>Montant</Form.Label>
            <Form.Control type="Number" placeholder="Enter montant" onChange={(e) => setMontant(e.target.value)}
              value={montant}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmai">
            <Form.Label>Perçu</Form.Label>
            <Form.Control type="Number" placeholder="Enter percu" onChange={(e) => setPercu(e.target.value)}
              value={percu}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmai">
            <Form.Label>Rondu</Form.Label>
            <Form.Control type="Numner" placeholder="Enter rendu" disabled="disabled" onChange={(e) => setRendu(e.target.value)}
              value={montant - percu}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmai">
            <Form.Label>Etat du facture</Form.Label>
            <Form.Control type="text" disabled="disabled" onChange={(e) => setEtat(e.target.value)}
              value={etat}
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

    </tr >
  )
}

export default FactureCard

import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { useDispatch } from 'react-redux';
import { Add_facture } from '../redux/Action/FactureAction';
const AddFacture = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const dispatch=useDispatch();
    const [client, setClient] = useState("");
    const [caissier, setCaissier] = useState("");
    const [montant, setMontant] = useState(0);
    const [percu, setPercu] = useState(0);
    const [rendu, setRendu] = useState(0);
    const [etat, setEtat] = useState("");
    const handleAdd=()=>{
        dispatch(Add_facture({client,caissier,montant,percu,rendu,etat}),handleClose(),handleClose(), window.location.reload())
    }

    return (
        <div>
            <Button variant="primary" style={{ borderRadius: "25%", width: "120px" }} onClick={handleShow}>
                Add facture
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Add New Facture</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form.Group className="mb-3" controlId="formBasic">
                        <Form.Label>Client</Form.Label>
                        <Form.Control type="text" placeholder="Enter Client" onChange={(e) => setClient(e.target.value)} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Caissier</Form.Label>
                        <Form.Control type="text" placeholder="Enter caissier" onChange={(e) => setCaissier(e.target.value)} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmai">
                        <Form.Label>Montant</Form.Label>
                        <Form.Control type="Number" placeholder="Enter montant" onChange={(e) => setMontant(e.target.value)} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmai">
                        <Form.Label>Percu</Form.Label>
                        <Form.Control type="Number" placeholder="Enter percu" onChange={(e) => setPercu(e.target.value)} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmai">
                    <Form.Label>Rendu</Form.Label>
                    <Form.Control type="Number"  disabled="disabled" value={montant - percu} onChange={(e) => setRendu(e.target.value)} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmai">
                <Form.Label>Etat</Form.Label>
                <Form.Control type="text" placeholder="facturee / payee" disabled="disabled" value={montant - percu > 0 ? "facturee" : "payee"} onChange={(e) => setEtat(e.target.value)} />
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

export default AddFacture

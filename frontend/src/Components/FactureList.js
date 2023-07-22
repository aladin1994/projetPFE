import React, { useEffect, useState } from 'react'
import '../Components/Style/FactureListStyle.css'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useDispatch, useSelector } from 'react-redux';
import { Get_Facture } from '../redux/Action/FactureAction';
import Spinner from 'react-bootstrap/Spinner';
import FactureCard from './FactureCard'
import AddFacture from './AddFacture';
const FactureList = ({factures}) => {
    const [search, setSearch] = useState('')
    const [loading, setLoading] = useState(true)
    const dispatch = useDispatch()
    useEffect(() => {
      setTimeout(() => {
        dispatch(Get_Facture(),setLoading(false))
      }, 1000);
    }, [dispatch])
  return (
    <div>
      <div className="menu-facture">
        <p>List des factures </p>
        <div className='right-menu'>
        <AddFacture />
        <Form  className="d-flex">
          <Form.Control
            type="search"
            placeholder="Search by client"
            className="me-2 sss"
            aria-label="Search"
            onChange={(e) => setSearch(e.target.value)}
          />
          <Button variant="outline-success">Search</Button>
        </Form>
        </div>
      </div>

      <dir className='board'>
                <table style={{ width: "100%" }} >
                    <thead>
                        <tr>
                        <td>Client</td>
                        <td>Caissier</td>
                        <td>Montant</td>
                        <td>Perçu</td>
                        <td>Rendu</td>
                        <td>Etat</td>
                        <td>Date</td>
                        <td></td>
                        
                        </tr>
                    </thead>
                    <tbody>
                    
                        {
                          
                            loading ? <Spinner animation="border" role="status">
                              <span className="visually-hidden">Loading...</span>
                  
                            </Spinner> : factures?.filter((el) => el.client.toUpperCase().includes(search.toUpperCase()))?.map((el) => <FactureCard key={el._id} el={el} />)
                  
                          
                        }

                    
                    </tbody>
                </table>
            </dir>


    </div>
  )
}

export default FactureList

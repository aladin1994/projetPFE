import React from 'react'

import '../Components/Style/FactureCardStyle.css'

const FactureCard = ({ el }) => {
  const payeeStyle = {
    backgroundColor:  "#27AE60" ,
    color: "#080707",
    padding: "10px",
    textAlign:"center",
  };
  const factureeStyleValid = {
    color: "#080707",
    backgroundColor: "#E90B19 ",
    padding: "10px",
    textAlign:"center",
  };
  return (
    <tr className="facture-ligne">
      
      <td>{el?.client}</td>
      <td>{el?.caissier}</td>
      <td>{el?.montant}</td>
      <td>{el?.percu}</td>
      <td>{el?.rendu}</td>
      <td style={el?.etat ==="payée"? payeeStyle :factureeStyleValid }>{el?.etat}</td>
      <td></td>
    </tr >
  )
}

export default FactureCard

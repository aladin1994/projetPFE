import React from 'react'
import './Style/PersonelCardStyle.css'
const PersonelCard = ({ el }) => {

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


    </tr>
  )
}

export default PersonelCard

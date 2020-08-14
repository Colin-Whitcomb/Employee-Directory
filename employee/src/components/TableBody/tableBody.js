import React from 'react';
import './style.css'

function tableBody(props) {
    return (
    <tbody className="tableBody">

    <tr>
    <img alt={props.name} src={props.image} id={props.id} className='profilePictures'/>
      <td>{props.name}</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
   
  </tbody>
    )
}

export default tableBody;
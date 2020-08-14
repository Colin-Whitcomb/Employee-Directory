import React from 'react';
import './style.css'

function tableBody(props) {
    return (
    <tbody className="tableBody">

    <tr>
      <td>{props.id}</td>
    <img alt={props.name} src={props.image} id={props.id} className='profilePictures img-container'/>
      <td>{props.name}</td>
      <td>{props.email}</td>
      <td>{props.phone}</td>
    </tr>
   
  </tbody>
    )
}

export default tableBody;
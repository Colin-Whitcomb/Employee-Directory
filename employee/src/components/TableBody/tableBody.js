import React from 'react';

function tableBody(props) {
    return (
    <tbody className="tableBody">

    <tr>
      <th scope="row">1</th>
      <td>{props.name}</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
   
  </tbody>
    )
}

export default tableBody;
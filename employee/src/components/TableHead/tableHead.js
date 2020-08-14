import React from 'react';



function tableHeader(props) {
    return (

  <thead className="tableHead">
    <tr>
      <th scope="col">#</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Handle</th>
    </tr>
  </thead>
    )
}

export default tableHeader;
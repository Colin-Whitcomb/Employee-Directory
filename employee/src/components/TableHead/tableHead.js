import React from 'react';



function tableHeader(props) {
    return (

  <thead className="tableHead thead-dark ">
    <tr>
      <th scope="col-sm-2">ID#</th>
      <th scope="col-sm-2">Profile Picture</th>
      <th scope="col-sm-2">Name</th>
      <th scope="col-sm-2">Email</th>
      <th scope="col-sm-2">Phone</th>
    </tr>
  </thead>
    )
}

export default tableHeader;
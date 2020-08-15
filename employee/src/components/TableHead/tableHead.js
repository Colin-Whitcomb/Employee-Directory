import React from 'react';



function tableHeader(props) {
    return (

  <thead className="tableHead thead-dark">
    <tr>
      <th scope="col-sm-2">ID#</th>
      <th scope="col-sm-2">Profile Picture</th>

      <th scope="col-sm-2">First Name

      <button type="button" className="btn btn-dark" id="nameBtn" onClick={() => props.sortFirstName(props)}>
      <i className="material-icons">
        import_export
      </i></button></th>

      <th scope="col-sm-2">Last Name

      <button type="button" className="btn btn-dark" id="nameBtn" onClick={() => props.sortLastName(props)}>
      <i className="material-icons">
      import_export
      </i></button></th>
      
      <th scope="col-sm-2">Email</th>
      <th scope="col-sm-2">Phone</th>
    </tr>
  </thead>
    )
}

export default tableHeader;
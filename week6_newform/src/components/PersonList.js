import React from 'react'

const PersonList = ({ newpeople , handleDelete }) => {
  const tableau = newpeople.map((person, index) => (
    <tr key={index}>
      <th scope="row">{index + 1}</th>
      <td>{person.firstname}</td>
      <td>{person.lastname}</td>
      <td>{person.email}</td>
      <td>{person.password}</td>
      <td>
        <div className="d-grid gap-2 d-md-flex justify-content-md-end">
          <button onClick={()=> handleDelete(person.firstname)} className="btn btn-danger" type="button">
            Delete
          </button>
        </div>
      </td>
    </tr>
  ))
  
 


  return (
    <React.Fragment>
      <div className="col m-4 ">
        <div className="p-3 border bg-light">
          <h3>PersonList</h3>
          <table className="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">FirstName</th>
                <th scope="col">LastName</th>
                <th scope="col">Email</th>
                <th scope="col">password</th>
                <th scope="col">Confirm</th>
              </tr>
            </thead>
            <tbody>{tableau}</tbody>
          </table>
        </div>
      </div>
    </React.Fragment>
  )
}

export default PersonList

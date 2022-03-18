import React from 'react'

const PersonList = (list, DeletePerson) => {
  return (
    <table>
      <thead>
        <tr>
          <th>First name</th>
          <th>Last name</th>
          <th>Email</th>
          <th>Password</th>
          <th>About</th>
          <th>Edit</th>
        </tr>
      </thead>
      <tbody>
        {list.map((x) => (
          <tr key={x.id}>
            <td>{x.firstName}</td>
            <td>{x.lastName}</td>
            <td>{x.email}</td>
            <td>{x.password}</td>
            <td>{x.about}</td>
            <td>
              {' '}
              <button onClick={() => DeletePerson(x.id)} >
                delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default PersonList

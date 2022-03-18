import React from 'react'

const PersonList = ({ newpeople }) => {
 const personList = newpeople.map((person, index) => (
    <tr key={index}>
      <td>Username : {person.username}</td>
      <td>Email    : {person.email}</td>
      <td>Password : {person.password}</td>
      <td>
      <button>DELETE</button>
      </td>
    </tr>
  ))

  return (
    <table>
      <tbody>{personList}</tbody>
    </table>
  )
}

export default PersonList
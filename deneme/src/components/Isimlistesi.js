import React from 'react'

const Isimlistesi = ({ personlist }) => {
  const personlistTablo = personlist.map((person, index) => (
    <tr key={index}>
      <td>{person.firstname}</td>
      <td>{person.lastname}</td>
      <td>
        <button>Delete</button>
      </td>
    </tr>
  ))

  return (
    <React.Fragment>
      <table>
        <thead>
          <tr>
            <th>FIRSTNAME</th>
            <th>LASTNAME</th>
            <th>ACTION</th>
          </tr>
        </thead>
        <tbody>{personlistTablo}</tbody>
      </table>
    </React.Fragment>
  )
}

export default Isimlistesi

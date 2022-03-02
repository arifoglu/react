import React from 'react'

const PersonList = ({ personList }) => {
  const personListTable = personList.map((person, index) => (
    <tr key={index}>
      <td>{person.firstName}</td>
      <td>{person.lastName}</td>
      <td>
        <button>Delete</button>
      </td>
    </tr>
  ));

  return (
    <React.Fragment>
      <table>
        <thead>
          <tr>
            <th>Firstname</th>
            <th>Lastame</th>
            <th></th>
          </tr>
        </thead>
        <tbody>{personListTable}</tbody>
      </table>
    </React.Fragment>
  )
}

export default PersonList

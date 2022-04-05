import React from 'react'

const List = ({ list }) => {

    const listele = list.map((infos, index) => (
        <tr key={index}>
            <th></th>
            <td>{infos.id}</td>
            <td>{infos.name}</td>
            <td>{infos.departure}</td>
            <td>{infos.arrival}</td>
        </tr>
    ))

  return (
    <React.Fragment>
      <div className="col">LIST</div>
      <table className="table">
        <thead>
          <tr>
            <th>#</th>
            <th>From</th>
            <th>Date</th>
            <th>Time</th>
          </tr>
        </thead>
        <tbody>{listele}</tbody>
      </table>
    </React.Fragment>
  )
}

export default List

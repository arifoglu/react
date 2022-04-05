import React from 'react'

const Hello = ({ names }) => {

  const liste =  names.map((person,index) => (
        <h1 key={index}>Hello {person.firstname} {person.lastname}</h1>
    ))

  return (
    <div>
        {liste}
    </div>
  )
}

export default Hello
import React from 'react'
import Person from './Person'

const SectionPerson = ({Data,username}) => {
  return (
    <>
      <Person Data={Data.filter((user)=> user.firstname === username)}/>
    </>
  )
}

export default SectionPerson

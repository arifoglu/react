import React from 'react'
import Person from './Person'

const PersonList = (props) => {
  return (
    <main>
        {
            props.list.map((person)=> <Person key={person.id} data={person}/> )
        }
    </main>
  )
}

export default PersonList
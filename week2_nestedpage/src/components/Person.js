import React from 'react'
import PersonInfo from './PersonInfo'
import PersonRelation from './PersonRelation'

const Person = (props) => {
  return (
    <section>
        <PersonInfo data={props.data}/>
        <PersonRelation friends={props.data.friends} children={props.data.children}/>
    </section>
  )
}

export default Person
import React from 'react'
import Children from './Children'

const SectionChildren = ({Data,username}) => {
  return (
    <>
    <Children Data={Data.filter((user)=> user.firstname === username)}/>
    </>
         
   
  )
}

export default SectionChildren
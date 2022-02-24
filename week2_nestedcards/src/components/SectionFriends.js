import React from 'react'
import Friends from './Friends'

const SectionFriends = ({Data,username}) => {
  return (
   
      <>
        <Friends Data={Data.filter((user)=> user.firstname === username)}/>
      </>
    
  )
}

export default SectionFriends
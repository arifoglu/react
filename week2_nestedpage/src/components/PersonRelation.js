import React from 'react'
import ChildrenInfo from './relation/ChildrenInfo';
import FriendInfo from './relation/FriendInfo';

const PersonRelation = (props) => {
    const friends =props.friends;
    const children =props.children;

  return (
   <>
    <ChildrenInfo list={children}/>
    <FriendInfo list={friends}/>
   </>
  )
}

export default PersonRelation
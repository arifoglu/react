import React, { useState } from 'react'

const City = () => {

    const[saat,SetSaat]=useState('0')
    const zaman= new Date();
    SetSaat(zaman.getDate())


  return (
    <>
    {saat}
    </>
  )
}

export default City
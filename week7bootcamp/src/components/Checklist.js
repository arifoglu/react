import React, { useState } from 'react'

const Checklist = () => {
  const [checkliste, setCheckListe] = useState([
    {
      faire: 'shop',
      check: true,
    },
    {
      faire: 'fattura',
      check: true,
    },
    {
      faire: 'compte',
      check: false,
    },
  ])

  return (
    <React.Fragment>
      {checkliste.map((list, index) => (
        <input type="checkbox" 
        key={index}
        value={checkliste} 
        faire={list.faire}
        check={list.check}
        />
      ))}
    </React.Fragment>
  )
}

export default Checklist

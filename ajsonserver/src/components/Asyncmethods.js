import React, { useEffect, useState } from 'react'

const Asyncmethods = () => {
  const [deneme, setDeneme] = useState([])

  useEffect(() => {
    loadData()
  }, [])

  const loadData = async () => {
    const url = 'https://jsonplaceholder.typicode.com/users'
    const response = await fetch(url)
    const data = await response.json()
    setDeneme(data)
    console.log(data);
  }

  return <div>Asyncmethods
      <p>FETCH DENEME</p>
      {deneme.map((user) => (
          <div key={user.id}> {user.name} {user.username} </div>
      ))}
  </div>
}

export default Asyncmethods

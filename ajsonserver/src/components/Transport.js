import React, { useEffect, useState } from 'react'

const Transport = () => {
  const [zaman, setZaman] = useState({})

  useEffect(() => {
    loadData()
  },[])

  const loadData = async () => {
    const url = 'http://transport.opendata.ch/v1/locations?query=Basel'
    const response = await fetch(url)
    const data = await response.json()
    setZaman(data)
    console.log(data)
  }
  return (
    <div>
      <p>Transport</p>
      {!zaman &&
        zaman.map((item, index) => <div key={index}>{item.stations.name}</div>)}
    </div>
  )
}

export default Transport

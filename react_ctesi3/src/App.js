import React, { useEffect, useState } from 'react'

const App = () => {
  const [data, setData] = useState([])

  useEffect(() => {
    //during initialing

    const getData = async () => {
      const response = await fetch(
        'http://www.omdbapi.com/?i=tt3896198&apikey=5a9706cf',
      )
      const incomingdata = await response.json()
      setData(incomingdata);
       //console.log(incomingdata)
    }

    getData()
  },[])

  return (
    <div>
      {data.Title.filter((isim)=> isim.Actor)}
    </div>
  )
}

export default App

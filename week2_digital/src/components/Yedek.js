import React, { useState } from 'react'

const Yedek = () => {
  const [hours, SetHours] = useState('0');
  const [minutes, Setminutes] = useState('0');
  const [seconds, SetSeconds] = useState('0');

  // const [selectedCity,setSelectedCity]=useState("Tokyo")

  // const cityList=[
  //   {name:"Tokyo", offset:9},
  //   {name:"Zurich",offset:1},
  //   {name:"NewYork", offset:-5},
  // ];



  setInterval(() => {
    const saat = new Date()
    SetHours(saat.getHours())
    Setminutes(saat.getMinutes())
    SetSeconds(saat.getSeconds())
  }, 1000)

  return (
   
      <section>
        <span className="clockHours">{hours}</span>
        <span className="clockMinutes">{minutes}</span>
        <span className="clockSecond">{seconds}</span>
      </section>
   
  )
}

export default Yedek

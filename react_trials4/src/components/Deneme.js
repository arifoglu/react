import React from 'react'

const Deneme = () => {
  const test = 21
  const isAuth = true

  return (
    <div>
      <h1>{1 + 1}</h1>
      <h1>{'bonjour'.toUpperCase()}</h1>
      <h1>{test}</h1>
      <div>{isAuth ? <p>Hallo</p> : null}</div>
    </div>
  )
}

export default Deneme

import React, { useState } from 'react'

const Counter = () => {

    const [counter, setCounter] = useState(0);

  return (
    <div>
        <button onClick={() => setCounter(counter + 1)}>artir</button>
        <p data-testid="counterId">{counter}</p>
        <button onClick={() => setCounter(counter - 1)}>azalt</button>
    </div>
  )
}

export default Counter
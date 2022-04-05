import React, { useState } from 'react'

const Search = () => {

 

const [fruitlist, setFruitlist] = useState(['muz','elma','armut','uzum','karpuz','cilek','kavun','ayva'])

const [ayikla, setAyikla] = useState('')


  return (
    <React.Fragment>
      <div>
        <form>
          <input type='search'  onChange={(e) => setCheckInput(e.target.value)}/>
        </form>
        <p>{ayikla}</p>
      </div>
    </React.Fragment>
  )
}

export default Search

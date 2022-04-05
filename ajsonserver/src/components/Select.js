import React, { useState } from 'react'
const Searchinput = ({addTravelInfo}) => {
    const[departure, setDeparture] = useState('');
    const[arrival, setArrival] = useState('');
    const handleClick = (e) => {
        e.preventDefault()
        const searchList = {
            departure:departure,
            arrival:arrival,
        };
        addTravelInfo(searchList)
    }
  return (
    <React.Fragment>
        <div class="col">SEARCH ZUG DATE
            <form>
                <input type='text' placeholder='departure place' value='' onChange={(e) => setDeparture(e.target.value)}></input>
                <input type='text' placeholder='arrival place' value='' onChange={(e) => setArrival(e.target.value)}></input>
            </form>
            <button type='submit' onClick={handleClick}>Search</button>
        </div>
    </React.Fragment>
  )
}
export default Searchinput
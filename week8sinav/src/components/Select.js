import React, { useState } from 'react'

const Select = ({ selected , transport }) => {

const [city1, setCity1] = useState('');
const [city2, setCity2] = useState('');
const [tarih, setTarih] = useState('');
const [zaman, setZaman] = useState('');

const handleClick = (e) => {
    e.preventDefault();

    const tespit = {
        city1 : city1,
        city2: city2,
        tarih : tarih,
        zaman : zaman ,
    };
    selected(tespit);

} 

  return (
     <React.Fragment>
        <div className="col">
            <form className="d-flex flex-column">
                <input type='text'  value={city1} onChange={(e) => setCity1(e.target.value)}/>
                <input type='text'  value={city2} onChange={(e) => setCity2(e.target.value)}/>
                <input type='date'  value={tarih} onChange={(e) => setTarih(e.target.value)}/>
                <input type='time'  value={zaman} onChange={(e) => setZaman(e.target.value)}/>
            </form>
            <button type='submit' onClick={handleClick}>Search</button>
        </div>
    </React.Fragment>
    
  )
}

export default Select

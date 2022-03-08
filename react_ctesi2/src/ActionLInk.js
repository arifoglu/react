import React from 'react'

const ActionLink= () => {


const handleClick = (e) => {
    e.preventDefault();
    console.log("The Link was clicked");
};

const deleteRow = (e)  => {
  e.preventDefault();
  console.log("The DELETEROW was clicked");

}

  return (
    <div>
        <a href="/" onClick={handleClick}>CLICK ME</a>
        <button onClick={(id,e) => deleteRow(id,e)}>Delete Row</button>
        
    </div>
  )
}

export default ActionLink
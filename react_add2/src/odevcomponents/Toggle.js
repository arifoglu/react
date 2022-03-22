import { useState } from 'react';

// import bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';


function Toggle() {

  // create a state holding all the toggle button states
  // "false" means deactivated/off
  // There are 5 toggle buttons also 5 Settings
  const [toggleList, setToggleList] = useState([
    false, false, false, false, false
  ]);

  // this function chenges one toggle in the toggleList state array
  // it finds first the toggle value by pIndex and set the negated value into array
  // after change the toggle value of theselected index, then put all them in the state array
  // all together, so that the "render" process could be called in the back scenes.
  const changeToggle = (pIndex, pToggle) => {
    toggleList[pIndex] = !pToggle;
    setToggleList([...toggleList]);    // <-- implicit call for the render.
  }


  // I used in this example bootstrap
  // especially the switch buttons (as toggles)
  // see the page https://getbootstrap.com/docs/5.0/forms/checks-radios/#switches
  return (
    <div className="App container" style={{width: "200px"}}>
        <div className="row">
          <div className="col">
            {
              // first iterate the array "toggleList state" and create the switch buttons (toggle)
              // Notice that we have a changeToggle event handler, see the description above.
              toggleList.map( (toggle, index) =>
                <div className="form-check form-switch">
                  <input id="flexSwitchCheckDefault"
                    className="form-check-input" 
                    type="checkbox"  
                    checked={toggle}
                    onClick={() => changeToggle(index, toggle)} 
                    />
                  <label 
                    className="form-check-label" 
                    for="flexSwitchCheckDefault">Settings {index}</label>
                </div>
              )
            }
          </div>
        </div>

        <div className="row">
          <div className="col">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Active settings</h5>
                  <p className="card-text">
                    {
                      // This iteration proints only the toggles with value "true"
                      toggleList
                        .map((toggle, index) => 
                          toggle===true && <div>Settings {index}, </div>
                        )
                    }
                  </p>
                </div>
              </div>
          </div>
        </div>
    </div>
  );
}

export default Toggle;
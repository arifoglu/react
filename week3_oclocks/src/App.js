import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row } from 'react-bootstrap'
import City1 from "./components/City1";
import City2 from "./components/City2";
import City3 from "./components/City3";
import Buttons from "./components/Buttons";


function App() {

  const[localtime1,setLocaltime1] = useState('');
  const[localtime2,setLocaltime2] = useState('');
  const[localtime3,setLocaltime3] = useState('');

  setInterval(() => {
    const zaman = new Date();
    setLocaltime1(zaman.toLocaleString("ar-SA"));
    setLocaltime2(zaman.toLocaleString("bn-BD"));
    setLocaltime3(zaman.toLocaleString("ko-KR"));
  },1000);


  return (
   <React.Fragment>
    <Row>
      <City1 localtime1={localtime1}/>
      <City2 localtime2={localtime2}/>
      <City3 localtime3={localtime3}/>
      <Buttons />
    </Row>
   </React.Fragment>
  );
}

export default App;

import './App.css';
import Navbar from './components/Navbar';
import User from './components/User'



function App() {

  return (
    <div className='container'>
      <Navbar />
      <hr />
      <User 
      Name ="David Rotenberg"
      Departman = "SoftWare"
      Salary = "5000 -Chf"
      
      />
      <User 
      Name ="Simon Rotenberg"
      Departman = "SoftWare"
      Salary = "6000 -Chf"
      
      />
      
     

    </div>
  );
}

export default App;

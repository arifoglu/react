import { useState } from 'react'
import FormInput from './components/FormInput';
import './App.css';


function App() {

 const [values,setValues] = useState({
   username:"",
   email:"",
   birthday:"",
   password:"",
   confirm:"",
 });

 const onChange = (e) => {
  setValues({...values,[e.target.name]: e.target.value});
};


 const inputs = [
   {
    id:1,
    name:"username",
    type:"text",
    placeholder:"UserName",
    label:"Username"
   },
   {
    id:2,
    name:"email",
    type:"text",
    placeholder:"Email",
    label:"Email"
  },
  {
    id:3,
    name:"birthday",
    type:"text",
    placeholder:"Birthday",
    label:"Birthday"
  },
  {
    id:4,
    name:"password",
    type:"text",
    placeholder:"password",
    label:"password"
  },
  {
    id:5,
    name:"confirm",
    type:"text",
    placeholder:"confirm",
    label:"confirm"
  }
 ]


const handleSubmit = (e) => {
  e.preventDefault();

};



console.log(values);

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        {inputs.map((input)=> (
        <FormInput key={input.id} {...input} value={values[input.name]} onChange={onChange}/>
        ))}
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;

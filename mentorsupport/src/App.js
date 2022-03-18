import { useEffect, useState } from 'react'
import './App.css'
import AddPerson from './components/AddPerson'
import PersonList from './components/PersonList'

const App = () => {
  const [list, setList] = useState([]);

  const [isLoading, setIsLoading] = useState(true);

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [about, setAbout] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const personList = {
      firstName,
      lastName,
      email,
      password,
      about,
    };

    fetch('http://localhost:8000/employee', {
      method: 'POST',
      body: JSON.stringify(personList),
    }).then(() => getData())
  };

  const DeletePerson = (pPersonid) => {
    fetch('http://localhost:8000/employee' + pPersonid, {
      method: 'DELETE',
    }).then(() => getData())
  };

  const getData = async () => {
    try {
      const response = await fetch(`http://localhost:8000/employee`)
      const data = await response.json()
      setList(data)
      setIsLoading(false)
    } catch (err) {
      console.log(err.message)
    }
  };

  useEffect(() => {
    getData()
  },[]);

  return (
    <div className="App">
      <AddPerson
        handleSubmit={handleSubmit}
        firstName={firstName}
        setfirstName={setFirstName}
        setlastName={setLastName}
        lastName={lastName}
        setemail={setEmail}
        email={email}
        password={password}
        about={about}
        setabout={setAbout}
        setpassword={setPassword}
      />
      <div>
        <PersonList list={list} handleDelete={DeletePerson} />
        {isLoading && (
          <h1 className="text-white">
            Failed to fetch the server, run json server with the port number
            8000 in the terminal{' '}
          </h1>
        )}
      </div>
    </div>
  )
}

export default App

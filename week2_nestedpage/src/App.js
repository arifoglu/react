import 'bootstrap/dist/css/bootstrap.min.css'
import PersonList from './components/PersonList';
import datalist from './components/data.json'


function App() {
  return (
    <div className="App">
        <PersonList list={datalist} />
    </div>
  )
}

export default App

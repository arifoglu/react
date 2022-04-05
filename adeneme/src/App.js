import Home from './components/Home'
import Navbars from './components/Navbars'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Create from './components/Create'
import BlogDetails from './components/BlogDetails'

function App() {
  return (
    <Router>
      <div className="App">
        <Navbars />
        <div className="content">
          <Switch>
            <Route exact path='/'>
              <Home />
            </Route>
            <Route path='/create'>
              <Create />
            </Route>
            <Route path='/blogs/:id'>
              <BlogDetails />
            </Route>
            
          </Switch>
        </div>
      </div>
    </Router>
  )
}

export default App

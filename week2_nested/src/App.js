import './App.css'
import Aside from './components/Aside'
import ChildrenCards from './components/ChildrenCards'
import FriendCards from './components/FriendCards'
import LinkChildren from './components/LinkChildren'
import LinkFriends from './components/LinkFriends'
import LinkPerson from './components/LinkPerson'

function App() {
  return (
    <div className="App container">
      <div className="row">
        <div id="aside" className="col-3">
          <LinkPerson />
          <Aside />
        </div>
        <div id="mainBoard" className="col-9">
          <div id="topBoardSide">
            <LinkChildren />
            <div id="cardBoardTop">
              <ChildrenCards />
              <ChildrenCards />
              <ChildrenCards />
            </div>
          </div>
          <div id="bottomBoardSide">
            <LinkFriends />
            <div id="cardBoardBottom">
              <FriendCards />
              <FriendCards />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App

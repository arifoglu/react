

function BasicExample() {

  const title = 'Welcome to the New Blog';
  const likes = 50 ;
  const person = {
    name:'YOSHI',
    age:30,

  }
const link = 'https://www.google.com/'

  return (
    <div className="App">
      <div className="content">
        <h1>{ title }</h1>
        <p> Liked { likes } times </p>
        <p> Name { person.name } { person.age } </p>
        <p>{ Math.random() * 2 }</p>
        <a href={ link }>Google </a>
      </div>
    </div>
  )
}

export default BasicExample
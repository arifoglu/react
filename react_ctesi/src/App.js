import './App.css'
import TedyBear from './components/TedyBear';


function App() {
  const productArray = [
    {
      images: 'url',
      names: 'Tedy Bar A',
      prices: 'CHF -25',
    },
    {
      images: 'url',
      names: 'Tedy Bar B',
      prices: 'CHF -25',
    },
    {
      images: 'url',
      names: 'Tedy Bar C',
      prices: 'CHF -25',
    },
  ]

  return (
    <div className="App">
      <TedyBear product={productArray} />
    </div>
  )
}

export default App

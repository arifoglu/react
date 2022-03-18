import React from 'react'
import Product from './product'

function App() {
  return (
    <div>
      <h1>Hello World</h1>
      <Product name="Amazon Echo" description="your assistant" price={(59.99)} />
      {<Product name="Sony" description="your assistant" price={(559.99)} />}
      {<Product name="Iphone" description="best phone" price={(1259.99)} />}
      {<Product name="Samsung" description="telephone" price={(559.99)} />}
      {<Product name="Mi" description="machine" price={(159.99)} />}
    </div>
  )
}

export default App

import React from 'react'

const TedyBear = (props) => {
  return (
     props.product.map(item => 
        <div id="products" style={{ width: '18rem' }}>
            <div>
            {item.images}
            </div>
            <div>
            {item.names}
            </div>
            <div>
            {item.prices}
            </div>
        </div>)
  )
}

export default TedyBear

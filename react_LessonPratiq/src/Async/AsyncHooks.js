import React, { useEffect } from 'react'
import { useState } from 'react'

const AsyncHooks = () => {
  const [search, setSearch] = useState('')
  const [query, SetQuery] = useState('')
  const [results, SetResults] = useState([])

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(
          'https://api.giphy.com/v1/gifs/search?api_key=zKpbInhYCrFHBR1FW1DLX6GbIsXjBHEU&q=${query}&limit=10&offset=0&rating=g&lang=en',
        )
        const json = await response.json()
        console.log({ json })
        SetResults(
          json.data.map((item) => {
            return item.images.preview.mp4
          }),
        )
      } catch (error) {}
    }

    if (query !== '') {
      fetchData()
    }
  }, [query])

  return (
    <div>
      <h1>AsyncHooks</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault()
          SetQuery(search)
        }}
      >
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="search for Gifs!"
        />
        <button type="submit">Search</button>
      </form>
      {results.map(item =>
        <video autoPlay loop  key={item} src={item} />
        )}
    </div>
  )
}

export default AsyncHooks

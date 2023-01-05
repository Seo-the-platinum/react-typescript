import React from 'react'
import useAxios from './hooks/useAxios'
import './App.css'

function App() {
  const { response, error, loading } = useAxios({
    body: null,
    headers: null,
    method: 'GET',
    url: '/characters/search?name=sephiroth',
  })

  console.log(response?.[0].name)
  return (
    <div className="App">
      {
        loading ? <h3>Loading...</h3> :
        <div className="character">
          <h3>{ response?.[0].name}</h3>
          <img src={response?.[0].pictures[0].url}/>
        </div>
      }
    </div>
  )
}

export default App

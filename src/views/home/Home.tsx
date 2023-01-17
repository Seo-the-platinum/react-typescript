import React from 'react'
import { useQuery } from 'react-query'

const Home = () => {
    const { data } = useQuery('character', {
      select: (data)=> {
        const characterData = !data.message && data.data.map(char=> ({name: char.name, picture: char.pictures[0].url}))
        return characterData
      }
    })
    console.log(data)
  return (
    <div>
      <h3>Search for your favorite Final Fantasy character</h3>
    </div>
  )
}

export default Home
import React from 'react'
import { useQuery } from 'react-query'

const Home = () => {
    const { data } = useQuery('character')
    console.log(data)
  return (
    <div>
        {data && !data?.data?.message ? <h3>{data.data[0].name}</h3> : null}
    </div>
  )
}

export default Home
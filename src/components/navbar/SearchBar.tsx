import React, { useEffect, useState } from 'react'
import FFApi from '../../hooks/useAxios'
import { useQuery, useQueryClient } from 'react-query'


const SearchBar = () => {
  const [ query, setQuery ] = useState <String|null>(null)
  const queryClient = useQueryClient()
  const { isLoading, isSuccess, isError, data, error, refetch } = useQuery(
    'character', async ({signal})=> await FFApi.get( `characters/search?name=${query}`, {signal})
  )
  const handleQuery = (e: React.ChangeEvent<HTMLInputElement>)=> {
    if (query && query.length > 0) {
      queryClient.cancelQueries({ queryKey: ['character'] })
    }
    setQuery(e.target.value)
  }

  if (isLoading) {
    return (
      <h3>Loading...</h3>
    )
  }
  return (
    <div className='searchBarContainer'>
        <input type='text' onChange={handleQuery}/>
        <h3>{!data?.data?.message && data?.data[0].name}</h3>
        {
          !data?.data?.message ? <img src={data?.data[0].pictures[0].url}/> : null
        }
    </div>
  )
}

export default SearchBar
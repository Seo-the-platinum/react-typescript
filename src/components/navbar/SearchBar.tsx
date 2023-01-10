import React, { useEffect, useState } from 'react'
import FFApi from '../../hooks/useAxios'
import { useQuery, useQueryClient } from 'react-query'


const SearchBar = () => {
  const [ query, setQuery ] = useState <String|null>(null)
  const { isLoading, isSuccess, isError, data, error, refetch } = useQuery(
    'character', async ({signal})=> await FFApi.get( `characters/search?name=${query}`, {signal})
    ,
    {enabled: false}
  )

  const handleQuery = (e: React.ChangeEvent<HTMLInputElement>)=> {
    setQuery(e.target.value)
  }

  const queryClient = useQueryClient()

  useEffect(()=> {
    if (query !== null && query.length > 0) {
      refetch()
    }
    return ()=> queryClient.cancelQueries({ queryKey: ['character'] })
  },[query])


  return (
    <div className='searchBarContainer'>
        <input type='search' onChange={handleQuery}/>
        <h3>{!data?.data?.message && data?.data[0].name}</h3>
        {
          !data?.data?.message ? <img src={data?.data[0].pictures[0].url}/> : null
        }
    </div>
  )
}

export default SearchBar
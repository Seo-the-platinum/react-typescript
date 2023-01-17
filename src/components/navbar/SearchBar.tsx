import React, { useEffect, useState } from 'react'
import FFApi from '../../hooks/useAxios'
import { useQuery, useQueryClient } from 'react-query'


const SearchBar = () => {
  const [ query, setQuery ] = useState <String|null>(null)
  const { isLoading, isSuccess, isError, data, error, refetch } = useQuery(
    'character', async ({signal})=> {
      if (query && query.length > 0) {
        return await FFApi.get( `characters/search?name=${query}`, {signal})
      }
    },
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
    //ex1 = return ()=> queryClient.cancelQueries({...})
    //ex2 = return ()=> { return queryClient.cancelQueries({...})}
    //ex3 = return ()=> { queryClient.cancelQueries({...})}

    //ex1 and ex2 are essentially the same, they return the cancelQueries method which is a Promise
    //typescript will throw an error because useEffect must have void or a destructor as its return value.
    //we fix the error by using ex3, we are telling the cleanup function to run the cancelqueries method but are not returning anything.
    
    return ()=> {queryClient.cancelQueries({ queryKey: ['character'] })}
  },[query])

  if (isLoading) {
    return <h3>Loading...</h3>
  }
  
  return (
    <div className='searchBarContainer'>
        <input type='search' onChange={handleQuery}/>
    </div>
  )
}

export default SearchBar
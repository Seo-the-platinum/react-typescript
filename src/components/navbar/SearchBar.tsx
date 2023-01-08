import React, { useEffect, useState } from 'react'
import useAxios from '../../hooks/useAxios'

const SearchBar = () => {
  const [ query, setQuery ] = useState <String|null>(null)
  const { response, error, loading } = query ? useAxios({
    body: null,
    headers: null,
    method: 'GET',
    url: `/characters/search?name=${query}`,
  }) : useAxios({body:null, headers: null, method: '', url: ''})
  
  const handleQuery = (e: React.ChangeEvent<HTMLInputElement>)=> {
    setQuery(e.target.value)
  }
  console.log(response)
  return (
    <div className='searchBarContainer'>
        <input type='text' onChange={handleQuery}/>
    </div>
  )
}

export default SearchBar
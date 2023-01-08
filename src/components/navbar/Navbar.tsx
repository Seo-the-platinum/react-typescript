import React from 'react'
import SearchBar from './SearchBar'
import ThemeToggle from './ThemeToggle'

const Navbar = () => {
  return (
    <div className='navbarContainer'>
        <ThemeToggle/>
        <SearchBar/>
    </div>
  )
}

export default Navbar
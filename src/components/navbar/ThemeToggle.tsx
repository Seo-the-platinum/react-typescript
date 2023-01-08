import React, { useContext } from 'react'
import Switch from 'react-switch'
import { GlobalContext } from '../../App'
import { HiMoon, HiOutlineSun } from "react-icons/hi";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useContext(GlobalContext)
  
  return (
    <div className='switchContanier'>
      <Switch
        checked={theme === 'dark'}
        checkedIcon={<HiOutlineSun color='black' size='1.5em'/>}
        offColor='#19024d'
        onChange={toggleTheme}
        onColor='#fff187'
        uncheckedIcon={<HiMoon color='white' size='1.5em'/>}
      />
    </div>
  )
}

export default ThemeToggle
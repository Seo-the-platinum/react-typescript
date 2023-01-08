import React, { createContext, useState } from 'react'
import Navbar from './components/navbar/Navbar';
import './App.css'

type Theme = {
  theme: String;
  toggleTheme: () => void;
}
export const GlobalContext = createContext<Theme>({
  theme: '',
  toggleTheme: ()=> {},
},)

function App() {
  const [ theme, setTheme ] = useState('light')
  const toggleTheme = () => {
    setTheme(prev=> prev === 'dark' ? 'light' : 'dark')
  }
  return (
    <GlobalContext.Provider value={{theme, toggleTheme}}>
      <div className="App">
        <Navbar/>
      </div>
    </GlobalContext.Provider>
  )
}

export default App

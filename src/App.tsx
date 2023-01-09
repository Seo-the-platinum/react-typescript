import React, { createContext, useState } from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'
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

const queryClient = new QueryClient()

function App() {
  const [ theme, setTheme ] = useState('light')
  const toggleTheme = () => {
    setTheme(prev=> prev === 'dark' ? 'light' : 'dark')
  }
  return (
    <QueryClientProvider client={queryClient}>
      <GlobalContext.Provider value={{theme, toggleTheme}}>
        <div className="App">
          <Navbar/>
        </div>
      </GlobalContext.Provider>
    </QueryClientProvider>
  )
}

export default App

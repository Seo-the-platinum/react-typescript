import React, { useEffect, useState } from 'react'

const useResize = () => {
    const [ width, setWidth ] = useState(window.innerWidth)
    useEffect(()=> {
        const resize = ()=> {
            console.log('running')
            setWidth(window.innerWidth)
        }

        window.addEventListener('resize', resize)
        return ()=> window.removeEventListener('resize', resize)
    },[window.innerWidth])
  return width
}

export default useResize
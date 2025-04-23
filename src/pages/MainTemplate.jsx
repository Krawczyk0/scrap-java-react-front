import React from 'react'
import Navbar from '../components/custom/Navbar'

const MainTemplate = ({children}) => {
  return (
    <div>
        <Navbar/>
      {children}
    </div>
  )
}

export default MainTemplate

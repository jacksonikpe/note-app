import React from 'react'

const Header = ({ handleDarkMode }) => {
  return (
    <div className='header'>
        <h1>Jackson's Notes</h1>
        <button className='toggle' onClick={() => handleDarkMode((prevDarkMode) => !prevDarkMode) }>Toggle Mode</button>
    </div>
  )
}

export default Header
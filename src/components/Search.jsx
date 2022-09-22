import React from 'react'
import { BiSearch } from 'react-icons/bi'

const Search = ({ handleSearch }) => {
  return (
    <div className='search'>
        <BiSearch className='search-icons' size='1.3em' />
        <input type='text' onChange={(e) => handleSearch(e.target.value)} placeholder='type to search...' />
    </div>
  )
}

export default Search
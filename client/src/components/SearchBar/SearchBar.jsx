import React from 'react'

import { ReactComponent as SearchIcon } from '../../assets/search.svg'
import './SearchBar.scss'

const SearchBar = () => (
    <div className='search-bar'>
        <SearchIcon className='search-bar__icon' />
        <input
            type='search'
            placeholder='Search'
            className='search-bar__input'
        />
    </div>
)

export default SearchBar

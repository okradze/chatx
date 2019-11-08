import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import axios from 'axios'

import { startCreateChat } from '../../redux/chats/chatsActions'
import { ReactComponent as SearchIcon } from '../../assets/search.svg'
import './SearchBar.scss'

const SearchBar = ({ startCreateChat }) => {
    const [searchQuery, setSearchQuery] = useState('')
    const [users, setUsers] = useState(null)

    const handleChange = event => {
        const { value } = event.target
        setSearchQuery(value)
    }

    useEffect(() => {
        if (searchQuery) {
            const fetchResults = async () => {
                const response = await axios.get(`users?search=${searchQuery}`)
                setUsers(response.data)
            }
            fetchResults()
        } else {
            setUsers(null)
        }
    }, [searchQuery])

    const handleCreateChat = async _id => {
        await startCreateChat(_id)
        setUsers(null)
    }

    return (
        <div className='search-bar'>
            <SearchIcon className='search-bar__icon' />
            <input
                value={searchQuery}
                onChange={handleChange}
                type='search'
                placeholder='Search'
                className='search-bar__input'
            />
            {users && (
                <div className='search-bar__results'>
                    <ul className='search-bar__list'>
                        {users.map(({ _id, fullName }) => (
                            <li key={_id} className='search-bar__item'>
                                {fullName}
                                <button onClick={() => handleCreateChat(_id)}>
                                    Chat
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    startCreateChat: _id => dispatch(startCreateChat([_id])),
})

export default connect(
    null,
    mapDispatchToProps,
)(SearchBar)

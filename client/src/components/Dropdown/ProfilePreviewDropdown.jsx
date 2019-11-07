import React from 'react'
import { connect } from 'react-redux'

import { logout } from '../../redux/user/userActions'
import './Dropdown.scss'

const ProfilePreviewDropdown = ({ toggleDropdownOpen, logout }) => {
    const handleLogout = async () => {
        await logout()
        toggleDropdownOpen()
    }

    return (
        <div className='dropdown profile-preview-dropdown'>
            <ul className='dropdown__list'>
                <li onClick={handleLogout} className='dropdown__item'>
                    Log Out
                </li>
            </ul>
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    logout: () => dispatch(logout()),
})

export default connect(
    null,
    mapDispatchToProps,
)(ProfilePreviewDropdown)

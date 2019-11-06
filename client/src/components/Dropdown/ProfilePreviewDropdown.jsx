import React, { useContext } from 'react'

import { UserContext } from '../../providers/user/UserProvider'
import './Dropdown.scss'

const ProfilePreviewDropdown = ({ toggleDropdownOpen }) => {
    const { logout } = useContext(UserContext)

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

export default ProfilePreviewDropdown

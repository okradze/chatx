import React from 'react'

import { logout } from '../../firebase/auth'
import './Dropdown.scss'

const ProfilePreviewDropdown = ({ toggleDropdownOpen }) => (
    <div className='dropdown profile-preview-dropdown'>
        <ul className='dropdown__list'>
            <li
                onClick={() => {
                    logout()
                    toggleDropdownOpen()
                }}
                className='dropdown__item'
            >
                Log Out
            </li>
        </ul>
    </div>
)

export default ProfilePreviewDropdown

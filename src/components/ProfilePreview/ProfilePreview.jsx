import React, { useContext, useState } from 'react'

import { ReactComponent as SettingsIcon } from '../../assets/settings.svg'
import { UserContext } from '../../providers/user/UserProvider'
import ProfilePreviewDropdown from '../Dropdown/ProfilePreviewDropdown'
import Avatar from '../Avatar/Avatar'
import './ProfilePreview.scss'

const ProfilePreview = () => {
    const {
        user: { displayName, photoURL },
    } = useContext(UserContext)
    const [isDropdownOpen, setIsDropdownOpen] = useState(false)

    const toggleDropdownOpen = () => setIsDropdownOpen(!isDropdownOpen)

    return (
        <div className='profile-preview'>
            <Avatar imageUrl={photoURL} medium />
            <span className='profile-preview__name'>{displayName}</span>
            <div className='profile-preview__icon'>
                <SettingsIcon
                    onClick={toggleDropdownOpen}
                    className='settings-icon'
                />
                {isDropdownOpen && (
                    <ProfilePreviewDropdown
                        toggleDropdownOpen={toggleDropdownOpen}
                    />
                )}
            </div>
        </div>
    )
}

export default ProfilePreview

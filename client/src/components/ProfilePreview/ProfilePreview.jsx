import React, { useState } from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import { selectUser } from '../../redux/user/userSelectors'
import { ReactComponent as SettingsIcon } from '../../assets/settings.svg'
import ProfilePreviewDropdown from '../Dropdown/ProfilePreviewDropdown'
import Avatar from '../Avatar/Avatar'
import './ProfilePreview.scss'

const ProfilePreview = ({ user }) => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false)

    const toggleDropdownOpen = () => setIsDropdownOpen(!isDropdownOpen)

    const { photoURL, fullName } = user

    return (
        <div className='profile-preview'>
            <Avatar imageUrl={photoURL} medium />
            <span className='profile-preview__name'>{fullName}</span>
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

const mapStateToProps = createStructuredSelector({
    user: selectUser,
})

export default connect(mapStateToProps)(ProfilePreview)

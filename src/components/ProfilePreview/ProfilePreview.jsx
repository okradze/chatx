import React from 'react'
import Avatar from '../Avatar/Avatar'

import { ReactComponent as SettingsIcon } from '../../assets/settings.svg'
import './ProfilePreview.scss'

const ProfilePreview = () => (
    <div className='profile-preview'>
        <Avatar
            imageUrl='https://robohash.org/velitnumquamodio.jpg?size=128x128&set=set1'
            medium
        />
        <span className='profile-preview__name'>Mirian Okradze</span>
        <SettingsIcon className='settings-icon' />
    </div>
)

export default ProfilePreview

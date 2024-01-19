import React from 'react'
import { UserAuth } from '../../Context/AuthContext'
import "./Profile.css"

const Profile = () => {

  const {user} = UserAuth()
  
  return (
    <div className='main' >
      <div className="username-container">
        <div className="profile-container">
            <div className="profile-img">
                <img src="https://e7.pngegg.com/pngimages/550/997/png-clipart-user-icon-foreigners-avatar-child-face.png" alt="Profile Picture" />
            </div>
            <div className="profile-description">
                <p className="user-title">{user?.email}</p>
                {/* <p className="username">@qusai_k09</p> */}
            </div>
        </div>
    </div>
    </div>
  )
}

export default Profile
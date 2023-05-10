import React from 'react'
import UserDashboardNav from './dashboard-nav'
import UserDashboardHeader from './dashboard-header'
import UserAnnouncement from './dashboard-announcement'

function UserDashboardMain() {
  return (
    <div className='flex w-screen auto' >
        <UserDashboardHeader/>
        <UserAnnouncement/>
        <UserDashboardNav/>
      
    </div>
  )
}

export default UserDashboardMain
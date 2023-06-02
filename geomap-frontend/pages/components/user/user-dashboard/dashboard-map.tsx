import React from 'react'
import UserDashboardHeader from './dashboard-header'
import UserDashboardNav from './dashboard-nav'
import Landslide from '../../appcomponent/maps/landslide'

function UserDashboardMap() {
  return (
    <div className='flex flex-col min-h-screen '>
       <UserDashboardHeader/>
      <div className='flex flex-grow overflow-x-hidden'>
      <UserDashboardNav/>
        <Landslide/>
      </div>
        
       
    </div>
  )
}

export default UserDashboardMap
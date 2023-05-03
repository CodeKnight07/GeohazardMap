import React from 'react'
import LandingNav from './landing-nav'
import SideNav from './sidenav'

function LandingPage() {
  return (
    <div className='w-screen h-screen'>
        <LandingNav/>
        <SideNav/>
    </div>
  )
}

export default LandingPage
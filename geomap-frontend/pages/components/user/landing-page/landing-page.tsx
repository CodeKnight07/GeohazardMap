import React from 'react'
import LandingNav from './landing-nav'
import SideNav from './sidenav'
import LandingContent from '../content/landing-content'

function LandingPage() {
  return (
    <div className='w-screen h-screen'>
        <LandingNav/>
        <LandingContent/>
        <SideNav/>
    </div>
  )
}

export default LandingPage
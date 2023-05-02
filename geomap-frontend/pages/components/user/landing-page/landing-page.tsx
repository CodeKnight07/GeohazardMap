import React from 'react'
import LandingNav from './landing-nav'
import LandingContent from '../content/landing-content'

function LandingPage() {
  return (
    <div className='w-screen h-screen'>
        <LandingNav/>
        <LandingContent/>
    </div>
  )
}

export default LandingPage
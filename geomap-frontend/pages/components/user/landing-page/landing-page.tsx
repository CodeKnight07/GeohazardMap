import React from 'react'



import LandingContent from '../content/landing-content'
import TopNav from './landing-top-nav'


function LandingPage() {
  return (
    <div className=' overflow-x-hidden'>

    <TopNav/>
    <LandingContent/>

    </div>
  )
}

export default LandingPage

import React from 'react'

import HomePageLanding from './home-page-landing'
import AboutLanding from './about-landing'
function LandingContent() {
  return (
   <div className='w-full h-screen bg-white '>
      <HomePageLanding/>
      <AboutLanding/>
   </div>
  )
}

export default LandingContent
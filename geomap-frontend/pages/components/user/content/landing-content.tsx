
import React from 'react'

import HomePageLanding from './home-page-landing'
import AboutLanding from './about-landing'
import ContactLanding from './contact-landing'
import FooterLanding from '../footer/footer-landing'
function LandingContent() {
  return (
   <div className='w-full h-screen bg-white '>
      <HomePageLanding/>
      <AboutLanding/>
      <ContactLanding/>
      <FooterLanding/>
   </div>
  )
}

export default LandingContent
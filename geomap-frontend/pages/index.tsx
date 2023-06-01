import React from 'react'
import LandingPage from './components/user/landing-page/landing-page'
import LoginForm from './components/form/login'
import UserDashboardMain from './components/user/user-dashboard/dashboard-main'
import UserDashboardMap from './components/user/user-dashboard/dashboard-map'

function Index() {
  return (
    <div className='w-screen h-screen'>
        {/* <LandingPage/> */}
        {/* <LoginForm/> */}
        {/* <UserDashboardMain/> */}
        <UserDashboardMap/>
    </div>
  )
}

export default Index
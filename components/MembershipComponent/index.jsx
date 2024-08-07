import React from 'react'
import Header from '../Shared/Header/NavBar'
import Footer from '../Shared/Footer/Footer'
import MembershipBanner from './MembershipBanner'
import MembershipContent from './MembershipContent'

const index = () => {
  return (
    <>
      <Header />
      <MembershipBanner />
      <MembershipContent />
      <Footer />
    </>
  )
}

export default index

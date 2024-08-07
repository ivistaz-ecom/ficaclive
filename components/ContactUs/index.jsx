
import React from 'react'
import DesktopHeader from '../Shared/Header/NavBar'
import Footer from '../Shared/Footer/Footer'
import ContactUsBanner from './ContactUsBanner'
import ContactUsContent from './ContactUsContent'

import '../StyleComponents'

const index = () => {
  return (
    <>
      <DesktopHeader />
      <ContactUsBanner />
      <ContactUsContent />
      <Footer />
    </>


  )
}

export default index

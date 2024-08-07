import React from 'react'

import Header from '../Shared/Header/NavBar'
import Footer from '../Shared/Footer'
import AboutUsBanner from '../AboutUsComponents/AboutUsBanner'
import AboutUsContent from '../AboutUsComponents/AboutUsContent'

const index = () => {
  return (
    <>
      <Header />
      <AboutUsBanner />
      <AboutUsContent />
      <Footer />
    </>
  )
}

export default index

import React from 'react'
import Header from '../Shared/Header/NavBar'
import Footer from '../Shared/Footer'
import NewsBanner from './NewsBanner'
import NewsBannerContent from './NewsBannerContent'
import NewsList from './NewsList'

import '../StyleComponents'

const index = () => {
  return (
    <>
      <Header />
      <NewsBanner />
      <NewsBannerContent />
      <NewsList />
      <Footer />
    </>
  )
}

export default index

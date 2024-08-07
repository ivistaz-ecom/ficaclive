import React from 'react'
import Header from '../Shared/Header/NavBar'
import Footer from '../Shared/Footer'
import NewsArchiveBanner from './NewsArchiveBanner'
import NewsArchiveBannerContent from './NewsArchiveBannerContent'
import NewsArchiveList from './NewsArchiveList'

const index = () => {
  return (
    <>
    <Header />
      <NewsArchiveBanner />
      <NewsArchiveBannerContent />
      <NewsArchiveList />
      <Footer />
    </>
  )
}

export default index

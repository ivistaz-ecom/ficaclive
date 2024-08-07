import React from 'react'

import EventGalleryBanner from './EventGalleryBanner'
import EventGalleryBannerContent from './EventGalleryBannerContent'
import EventGalleryLists from './EventGalleryLists'
import Header from '../Shared/Header/NavBar'
import Footer from '../Shared/Footer'



const index = () => {
  return (
    <div>
      <Header />
      <EventGalleryBanner />
      <EventGalleryBannerContent />
      <EventGalleryLists />
      <Footer />
      
    </div>
  )
}

export default index

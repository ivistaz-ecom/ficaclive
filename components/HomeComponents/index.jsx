import React from 'react'
import Header from '../Shared/Header/NavBar'
import Footer from '../Shared/Footer'
import HomeBanner from './HomeBanner'
import HomeBannerContent from './HomeBannerContent'
import HomeIntroComponent from './HomeIntroComponent'
import HomeOrganisation from './HomeOrganisation'
import HomeLatestNews from './HomeLatestNews'
import HomeLatestHighlights from './HomeLatestHighlights'
import HomeConcludedEvents from './HomeConcludedEvents'
import HomeUpcomingEvents from './HomeUpcomingEvents'

import '../StyleComponents'


const index = () => {
  return (
    <>
      <Header />
      <HomeBanner />
      <HomeBannerContent />
      <HomeIntroComponent />
      <HomeUpcomingEvents />
      <HomeConcludedEvents />
      <HomeLatestHighlights />
      <HomeLatestNews />
      <HomeOrganisation />

      <Footer />
    </>
  )
}

export default index

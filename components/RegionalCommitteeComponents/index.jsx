
import React from 'react'
import Header from '../Shared/Header/NavBar'
import Footer from '../Shared/Footer'
import RegionalCommittees from './RegionalCommittees'
import RegionCommitteesBanner from '../RegionalCommitteeComponents/RegionCommitteeBanner'
import RegionCommitteesBannerContent from '../RegionalCommitteeComponents/RegionCommitteBannerContent'
import RegionalCommitteesContent from './RegionalCommitteesContent'


import '../StyleComponents'



const index = () => {
  return (
    <>
      <Header />
      <RegionCommitteesBanner />
      <RegionCommitteesBannerContent />
      <RegionalCommitteesContent />
      <RegionalCommittees />
      <Footer />
    </>
  )
}

export default index

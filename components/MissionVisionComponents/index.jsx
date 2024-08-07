import React from 'react'
import Header from '../Shared/Header/NavBar'
import Footer from '../Shared/Footer'
import MissionVisionBanner from './MissionVisionBanner'
import MissionVisionContent from './MissionVisionContent'

const index = () => {
  return (
    <>
     <Header />
     <MissionVisionBanner />
     <MissionVisionContent />
     <Footer /> 
    </>
  )
}

export default index

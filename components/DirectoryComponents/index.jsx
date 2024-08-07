import React from 'react'
import Header from '../Shared/Header/NavBar'
import Footer from '../Shared/Footer'
import DirectoryBanner from './DirectoryBanner'
import DirectoryContent from './DirectoryContent'

import '../StyleComponents'

const index = () => {
  return (
    <>
   <Header />
   <DirectoryBanner />
   <DirectoryContent />
   <Footer />
   </>
  )
}

export default index

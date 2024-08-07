import React from 'react'
import Header from '../Shared/Header/NavBar'
import Footer from '../Shared/Footer'
import HistoryBanner from './HistoryBanner'
import HistoryContent from './HistoryContent'
import HistoryList from './HistoryList'
import HistoryContentpart_2 from './HistoryContentpart_2'


const index = () => {
  return (
    <>

      <Header />
      <HistoryBanner />
      <HistoryContent />
      <HistoryList />
      <HistoryContentpart_2 />
      <Footer />

    </>
  )
}

export default index

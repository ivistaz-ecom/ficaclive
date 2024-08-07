import React from 'react'

import Header from '../Shared/Header/NavBar'
import Footer from '../Shared/Footer'
import BoardOfDirectorsList from './BoardOfDirectorsList'
import BoardOfDirectorsBanner from './BoardOfDirectorsBanner'
import BoardOfDirectorsContent from './BoardOfDirectorsContent'
import BoardOfHonaroaryList from './BoardOfHonaroaryList'

const index = () => {
  return (
    <>
      <Header />
      <BoardOfDirectorsBanner />
      <BoardOfDirectorsContent />
      <BoardOfDirectorsList />
      <BoardOfHonaroaryList />
      <Footer />
    </>
  )
}

export default index

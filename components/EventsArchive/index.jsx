import React from 'react'
import NavBar from '../Shared/Header/NavBar'
import Footer from '../Shared/Footer/Footer'
import EventArchiveBanner from './EventArchiveBanner'
import EventArchiveBannerContent from './EventArchiveBannerContent'
import EventArchiveList from './EventArchiveList'

const index = () => {
    return (
        <>
            <NavBar />

            <EventArchiveBanner />
            <EventArchiveBannerContent />
            <EventArchiveList />

            <Footer />
        </>
    )
}

export default index
import React from 'react'
import EventGallery from './EventArchiveGaller'
import Footer from '../../../components/Shared/Footer/Footer'
import Back from '../../../components/Shared/Back'


function page({ params }) {

  return (
    <>
      {/* <Back /> */}
      <EventGallery slug={params.slug} />
      <Footer />
    </>
  )
}

export default page

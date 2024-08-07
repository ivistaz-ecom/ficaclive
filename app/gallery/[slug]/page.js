import React from 'react'
import Gallery from '../../../utils/gallerys'
import Footer from '../../../components/Shared/Footer/Footer'
import Back from '../../../components/Shared/Back'


function page({ params }) {

  return (
    <>
      <Back />
      <Gallery slug={params.slug} />
      <Footer />
    </>
  )
}

export default page

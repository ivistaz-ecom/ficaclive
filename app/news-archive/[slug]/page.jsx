
import React from 'react'

import Posts from './posts'

const page = ({ params }) => {
  
  
  return (
    <>
      <Posts slug={params.slug} />
    </>
  )
}

export default page

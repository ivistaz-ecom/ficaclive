'use client'
import React, { useState , useEffect } from 'react'

import Posts from './posts'

const page = ({params}) => {

  return (
    <>
    {/* <Posts slug={params.slug} /> */}
    {/* <NewsBanner /> */}

    <Posts slug={params.slug} />
   
    </>
  )
}

export default page

import React from 'react'
import { IoArrowBackSharp } from "react-icons/io5";
import Link from 'next/link'

function Back() {
  return (
    <nav class="navbar navbar-light bg-light">
      <div class="container">
        <Link class="navbar-brand" href="/gallery">
          <IoArrowBackSharp size={35} /> Back to Gallery
        </Link>
      </div>
    </nav>
  )
}

export default Back

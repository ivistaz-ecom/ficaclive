import React from 'react'

import EventGalleryComponents from '../../components/EventGalleryComponents'

export const metadata = {
  title: "FICAC Gallery",
  description:
    " Browse through the FICAC Gallery for a visual journey capturing moments of consular excellence and international collaboration."
};

const page = () => {
  return (
    <div>
      <EventGalleryComponents />
    </div>
  )
}

export default page

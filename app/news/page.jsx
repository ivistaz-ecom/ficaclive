import React from 'react'
import NewsComponents from '../../components/NewsComponents'

export const metadata = {
  title:  "Stay Informed on Consular Developments",
  description:
    "Explore the latest updates and insights on consular affairs, and and get a glimpse a glimpse into the world of global diplomacy and unity."
};

const page = () => {
  return (
    <div>
      <NewsComponents />
      {/* <NewsBanner /> */}
    </div>
  )
}

export default page


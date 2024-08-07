import React from 'react'
import UpcomingEvents from './UpcomingEvents'

const page = ({ params }) => {



    return (
        <>
            <UpcomingEvents slug={params.slug} />
        </>
    )
}

export default page
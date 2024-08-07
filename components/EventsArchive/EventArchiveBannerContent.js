import React from 'react'
import { Col, Container } from 'react-bootstrap'

const EventArchiveBannerContent = () => {
    return (
        <>
            <Container fluid className='p-0 mb-5'>
                <Container className='p-0'>
                    <Col className='wbg-dark p-4 mt-n1' lg={6} sm={12}>
                        <h1 className='mb-0 bfs-1 text-white'>
                            Events
                            <br className='lh-1' />
                            Archive
                        </h1>
                    </Col>
                </Container>
            </Container>
        </>
    )
}

export default EventArchiveBannerContent
import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

const RegionCommitteeBannerContent = () => {
  return (

    <Container fluid className='p-0'>
      <Container className='p-0'>
        <Col className='wbg-dark p-4 mt-n1' lg={6} sm={12}>
          <h1 className='mb-0 bfs-1 text-white'>
            FICAC
            <br className='lh-1' />
            Committees
          </h1>
          <h3 className='text-white'> Regions Committees</h3>
        </Col>
      </Container>
    </Container>

  )
}

export default RegionCommitteeBannerContent

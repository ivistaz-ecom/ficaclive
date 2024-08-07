import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Image from 'next/image'

const HomeBannerContent = () => {
  return (
    <Container fluid className='p-0'>
      <Container className='p-0'>
        <Col className='wbg-dark p-4 mt-n1' lg={5} sm={12}>
          <h1 className='mb-0 bfs-1 text-white lh-1'>
            FICAC<br className='lh-1' />News
          </h1>
        </Col>
      </Container>
    </Container>
  )
}

export default HomeBannerContent

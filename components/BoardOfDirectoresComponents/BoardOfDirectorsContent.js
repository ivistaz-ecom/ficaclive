import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'


const HomeBannerContent = () => {
  return (
    <Container fluid className='p-0'>
      <Container className='p-0'>
        <Col className='wbg-dark p-4 mt-n1' lg={6} sm={12}>
          <h1 className='mb-0 bfs-1 text-white'>
            Board of<br className='lh-1' />Directors
          </h1>
        </Col>
      </Container>
      <Container className='mt-5'>
        <Row>
          <Col></Col>
          <Col lg={8}>
            <p className='fs-5 fw-300'>
              The Board of Directors is the governing body of FICAC to set strategy, oversee management, and protect the interests of FICAC Members. It is responsible for the execution of the decisions of the General Assembly and for the management and supervision of the affairs of the Federation.
            </p>
            <p className='fs-5 fw-300'>
              The Board of Directors prepares and executes the work programs designed to promote the interests of the Federation. The present Board of Directors was elected for a 3-year term in Limassol, Cyprus, on the 7th of November 2022 and consists of the following members:
            </p>
          </Col>
        </Row>
      </Container>
    </Container>
  )
}

export default HomeBannerContent

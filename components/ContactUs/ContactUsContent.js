import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Link from 'next/link'


const HomeBannerContent = () => {
  return (
    <Container fluid className='p-0'>
      <Container className='p-0'>
        <Col className='wbg-dark p-4 mt-n1' lg={6} sm={12}>
          <h1 className='mb-0 bfs-1 text-white'>
            Contact Us
          </h1>
        </Col>
      </Container>
      <Container className='my-5'>
        <Row>
          <Col></Col>
          <Col lg={8}>
            <h3 className='fs-2 fw-500'>
              FICAC AISBL, Office of the President
            </h3>
            <p className='fs-5 fw-300'>
              “World Federation of Consuls” Permanent Secretariat IT TOWER, 480 Avenue Louise, 1050 Brussels - Belgium
            </p>
            <p className='fs-5 fw-300'>
              E-mail: <Link href="mailto:permanent.secretariat@ficacworld.org" className='txt-blue text-decoration-none'>permanent.secretariat@ficacworld.org</Link>
            </p>
          </Col>
        </Row>
      </Container>
    </Container>
  )
}

export default HomeBannerContent

import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'


const HomeBannerContent = () => {
  return (
    <Container fluid className='p-0 '>
      <Container className='p-0'>
        <Col className='wbg-dark p-4 mt-n1' lg={8} sm={12}>
          <h1 className='mb-0 bfs-1 text-white'>
            Bridging the World
          </h1>
          <p className='pt-2 fs-5 lh-13 fw-200 text-white'>
            FICAC, a global network of Consular Associations, was created to support and
            improve the status, legitimacy, and   effectiveness of all consular officers in all receiving States.
          </p>
          <p className='fs-5 lh-13 fw-200 text-white'>
            It aims to promote and strengthen mutual understanding between Honorary Consuls and Career Consuls worldwide; develop a framework and basis for the exchange of current information, ideas and suggestions regarding matters related to the office of Honorary Consuls and Career Consuls; promote at the national level and international for a better understanding of duties and responsibilities.</p>
        </Col>
      </Container>
    </Container>
  )
}

export default HomeBannerContent

import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Image from 'next/image'

// tst
const HomeBannerContent = () => {
  return (
    <Container fluid className='p-0'>
      <Container className='p-0'>
        <Col className='wbg-dark p-4 mt-n1' lg={8} sm={12}>
          <h1 className='mb-0 bfs-1 text-white lh-1'>
            FICAC Is There<br className='lh-1' />to Serve Consuls<br className='lh-1' />All over the World
          </h1>
        </Col>
      </Container>
      <Container className='my-5'>
        <Row>
          <Col lg={4} className='align-items-center d-flex'>
            <Image src='/About Image.jpg' width={336} height={300} alt='' className='img-fluid' />
          </Col>
          <Col lg={8}>
            <p className='pt-2 fs-5 lh-2 fw-300 '>FICAC was established in Copenhagen in October 1982. It was born
              of the necessity to bring together Consular Associations or Corps
              from all over the world to share experiences, and co-ordinate
              efforts to enhance the status and effectiveness of the Consul, the
              oldest institution serving International bilateral relations.</p>
            <p className='pt-2 fs-5 lh-2 fw-300 '>FICAC is a global network of Consular Associations created to
              support and improve the status, legitimacy and effectiveness of
              all consular officers in all receiving States.</p>
            <p className='pt-2 fs-5 lh-2 fw-300 '>FICAC aims to promote and strengthen mutual understanding
              between Honorary Consuls and Career Consuls worldwide; develop a
              framework and basis for the exchange of current information, ideas and
              suggestions regarding matters related to the office of Honorary
              Consuls and Career Consuls; promote at the national level and
              international for a better understanding of duties and
              responsibilities, rights and privileges of Honorary Consuls and
              Career Consuls.</p>
          </Col>
        </Row>
      </Container>
    </Container>
  )
}

export default HomeBannerContent

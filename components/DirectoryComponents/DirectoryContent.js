import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'


const HomeBannerContent = () => {
  return (
    <Container fluid className='p-0'>
      <Container className='p-0'>
        <Col className='wbg-dark p-4 mt-n1' lg={6} sm={12}>
          <h1 className='mb-0 bfs-1 text-white'>
            Directory
          </h1>
        </Col>
      </Container>
      <Container className='mt-5'>
        <Row>
          <Col></Col>
          <Col lg={8}>
            <p className='fs-5 fw-300'>FICAC, the World Federation of Consuls, has spread wide and fast since it was founded in 1982. </p>
            <p className='fs-5 fw-300'>To this day 97 Consular Corps, Associations, and affiliated members from around the world have joined the Federation, contributing to its mission of promoting international cooperation and fostering diplomatic relations.</p>
            <p className='fs-5 fw-300'>FICAC has grown into a powerful force for diplomacy, bringing together diverse nations, cultures, and perspectives; it serves as a bridge between countries, facilitating dialogue on a global scale. It plays a crucial role in coordinating the work of consuls, supporting their efforts in maintaining diplomatic ties, assisting the needs of citizens abroad and promoting cultural exchange. </p>
            <p className='fs-5 fw-300'>We welcome the idea of more Associations joining the FICAC family; its impact on shaping global diplomacy and supporting the work of consuls becomes increasingly evident, making it a key player in the pursuit of a more interconnected and peaceful world.</p>
          </Col>
        </Row>
      </Container>
    </Container>
  )
}

export default HomeBannerContent

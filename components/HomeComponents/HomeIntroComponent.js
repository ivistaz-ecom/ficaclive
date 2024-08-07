import Image from 'next/image'
import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

const HomeIntroComponent = () => {
  return (
    <>
      <Container className='p-5'>
        <Row className='mt-2'>
          <Col sm={12} lg={5} className='d-flex flex-column justify-content-center'>
            <Image src="/home.jpeg" width={300} height={150} alt="aboutus" className='w-100 h-auto img-fluid' />
          </Col>
          <Col className='' lg={7}>
            <h2 className='fs-1 txt-dark'>About FICAC</h2>
            <p className='fs-5 fw-300 lh-13'>FICAC (Federation Internationale des Corps et Associations Consulaires AISBL) is also known as the World Federation of Consuls. The Federation is a non-profit organisation and it abstains from all religious or political activities and from the practice of any discrimination on grounds of race, sex, colour, religion or such other grounds as enumerated in relevant international human rights treaties.</p>
            <p className='fs-5 fw-300 lh-13'>FICAC has been recognised as an NGO by the United Nations in 1993, initially with ROSTERECOSOC status upgraded in August 2018 to SPECIAL ECOSOC Status. It is also recognised as an NGO by the Organisation of American States (OAS) and by the European Union (EU).</p>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default HomeIntroComponent

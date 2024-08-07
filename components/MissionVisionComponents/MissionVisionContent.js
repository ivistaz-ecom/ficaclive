import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Image from 'next/image'

const HomeBannerContent = () => {
  return (
    <Container fluid className='p-0'>
      <Container className='p-0'>
        <Col className='wbg-dark p-4 mt-n1' lg={8} sm={12}>
          <h1 className='mb-0 bfs-1 text-white lh-1'>
            FICAC <br className='lh-1' />Mission & Vision
          </h1>
        </Col>
      </Container>
      <Container className='my-5'>
        <Row>
          <Col lg={12}>
            <p className='pt-2 fs-5 lh-2 fw-300 '>The primary objective and mission of the International Federation of Consular Corps and Associations (FICAC) is global collaboration and unity with a focus on the promotion of peace, education, culture, international trade, economic growth, equality and inclusivity. We firmly believe that through solidarity, we can address the world’s most pressing challenges and issues that transcend borders and cultures.</p>
            <p className='pt-2 fs-5 lh-2 fw-300 '>Through FICAC’s Conferences, which are held globally, we encourage people to transcend their differences and enjoy the diversity of human heritage.</p>
            <p className='pt-2 fs-5 lh-2 fw-300 '>By facilitating international trade and promoting investment, we are committed to creating a world marked by collective prosperity and shared success.</p>
            <p className='pt-2 fs-5 lh-2 fw-300 '>FICAC actively promotes gender equality and inclusion, a necessary foundation for a peaceful, prosperous, and sustainable world. Finally, we are committed to eliminating discrimination in all its forms and promoting fairness, inclusivity, and equity.</p>
            <p className='pt-2 fs-5 lh-2 fw-300 '>Our vision inspires Consuls from every corner of the world, to effect transformative change. In this collective effort, the dedication, and efforts of FICAC, its Board of Directors and its Committees persist. We are resolute in our commitment to cultivate meaningful partnerships; this commitment serves as a catalyst for change, a testament to what can be achieved when united in pursuit of a better world.</p>
            <p className='pt-2 fs-5 lh-2 fw-300 '>At FICAC, our actions are guided by the moral principles of its members, and we are steadfast in our commitment to transparency and honesty. We believe in the power of truth, and our interactions are marked by sincerity, and a dedication to open communication. We strive to ensure that decisions and actions are rooted in justice and equity. We consider service to others as a noble calling. Putting the well-being of the global community above personal gain is our mission. We remain dedicated to our cause and the people we serve. We understand that true progress is built upon understanding and caring for the needs of others.</p>
          </Col>
        </Row>

      </Container>
    </Container>
  )
}

export default HomeBannerContent

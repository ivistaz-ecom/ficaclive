import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Image from 'next/image'

const HomeBannerContent = () => {
  return (
    <Container fluid className='p-0'>
      <Container className='p-0'>
        <Col className='wbg-dark p-4 mt-n1' lg={5} sm={12}>
          <h1 className='mb-0 bfs-1 text-white lh-1'>
            History<br className='lh-1' />of FICAC
          </h1>
        </Col>
      </Container>
      <Container className='my-5'>
        <Row>
          <Col lg={12}>
            <p className='pt-2 fs-5 lh-2 fw-300 '> Fédération Internationale des Corps et Associations Consulaires – “FICAC”, also known as the World Federation of Consuls, was founded in Copenhagen on 2 October 1982 by a small group of visionaries led by Consul General Vagn Jespersen of Denmark. This body gave Consuls of the world a much-needed forum to share experiences and coordinate efforts to enhance their status and effectiveness and to bring together Consular Associations and Corps from all around the globe. FICAC is an International Non-Profit Association (AISBL) established in Belgium by a Royal Decree. Agreements have also been signed with more than 20 Universities around the world to collaborate in the fields of diplomacy and peace and conflict resolution studies.</p>
            <p className='pt-2 fs-5 lh-2 fw-300 '>FICAC has spread widely and rapidly: since 1982, 97 associations have joined FICAC. It has been organising periodic conferences to strengthen links between Honorary Consuls and channel their expertise into professional areas. The World Federation of Consuls has United Nations recognition as an NGO (1993) with SPECIAL ECOSOC Status (since August 2018). It is also recognised as an NGO by the Organisation of American States (OAS) and has a collaboration with the European Union.</p>
            <p className='pt-2 fs-5 lh-2 fw-300 '>On 17th September 2010, the World Federation of Consuls signed a partnership agreement with the Prince Albert II Foundation of Monaco, a Foundation created by His Serene Highness Prince Albert II, to work in the fields of environment and climate change. Several MoUs were also signed with international organisations such as ASCAME - Association of the Mediterranean Chambers of Commerce -, RASIT - The Royal Academy of Science International Trust -, INTERLEGAL - Global Legal Network -, PAM – Parliamentary Union of the Mediterranean et al. A minimum of 2 Regional Conferences are organised every year and the World Congress of Consuls, during which the General Assembly elects the President, Vice-President and 9 Board Members, is held every three years.</p>
          </Col>
        </Row>

      </Container>
    </Container>
  )
}

export default HomeBannerContent

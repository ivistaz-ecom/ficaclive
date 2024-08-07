import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Image from 'next/image'
import Link from 'next/link'


const HomeBannerContent = () => {
  return (
    <Container fluid className='p-0 pb-5'>
      <Container className='p-0'>
        <Col className='wbg-dark p-4 mt-n1' lg={6} sm={12}>
          <h1 className='mb-0 bfs-1 text-white'>
            FICAC
            <br className='lh-1' />
            Committees
          </h1>
        </Col>
      </Container>
      <Container className='mt-5'>
        <Row>
          <Col>
            <Image src="/ficac_content_committe.jpg" alt="aboutus"
              className='w-100 h-auto'
              width={200}
              height={250}
            />
          </Col>
          <Col lg={8}>
            <p className='fs-5 fw-300'>
              Due to the expansion of the Federation in terms of its scope, objectives and activities, and as it has moved to new levels of development, Regional Committees were established in all regions of the world and Central Committees were established, focusing on specific issues.
            </p>

            <p className='fs-5 fw-300'>
              Each Committee of the Federation has been defined in terms of its purpose and how it is expected to operate at the FICAC level. The FICAC Committee Terms of Reference, which was initially adopted in 2010, and amended and approved by the new Board of Directors in July 2023, specifies those terms and purposes.
            </p>

            <p className='fs-5 fw-300'>
              Committees were formed to deal with specific FICAC issues. Each Committee is chaired by a Regional Chairperson and staffed by the selection of the Chair to include Deans and members who have a specific interest in the topic.
            </p>

            <p className='fs-5 fw-300'>
              Each region will be managed by a Regional Chairperson who may be invited to attend the Board meetings and report on the progress in their region.
            </p>

            <div className='d-flex flex-row gap-2'>
              <Link href="/ficac-committees/central-committees" className='btn btn-border px-3 py-2 fw-200 d-inline-block'>Central Committees</Link>
              <Link href="/ficac-committees/regions-committees" className='btn btn-border px-3 py-2 fw-200'>Regions Committees</Link>
            </div>
          </Col>
        </Row>

      </Container>
    </Container>
  )
}

export default HomeBannerContent

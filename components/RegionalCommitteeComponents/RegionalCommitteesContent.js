import React from 'react'
import { Container , Row ,Col } from 'react-bootstrap'

const RegionalCommitteesContent = () => {
  return (
    <Container fluid className='my-5'>
       <Container>
        <Row>
         <Col >
         </Col>
         <Col lg={8} sm={12}>
            <p className='fs-5 fw-500'>
            The functions of the Regional committees will be similar to those of the Federation overall and they are as follows:
            </p>
            <p className='fs-5'>Functions of the regional committees</p>
            <ul>
                <li>
                    <p className='fs-5 fw-300'>Project the work of the World Federation — by communicating on a regular basis with member countries. </p>
                    </li>
                    <li>
                    <p className='fs-5 fw-300'>Develop membership within the region — special visits to countries that are not members. </p>
                    </li>
                    <li >
                    <p className='fs-5 fw-300'>Develop FICAC programs within the region.</p>
                    </li>


                    <li>
                    <p className='fs-5 fw-300'>Visit member countries and encourage the work of the member corps- advising on projects and liaising with the chairman of FICAC committees. </p></li>


                     <li>
                     <p className='fs-5 fw-300'>Project each member positively in the receiving state by interacting with media, ministries of foreign affairs and through the FICAC programs etc. </p>
                     </li>


                     <li>
                     <p className='fs-5 fw-300'>Promote annual trade expos in each country of the region. Create a better understanding of FICAC Services — invite FICAC Directors to the region.</p>
                </li>
            </ul>
         </Col>
        </Row>
       </Container>
    </Container>
      
   
  )
}

export default RegionalCommitteesContent

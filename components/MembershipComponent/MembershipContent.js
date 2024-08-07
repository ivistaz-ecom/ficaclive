import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Link from 'next/link'


const HomeBannerContent = () => {
     return (
          <Container fluid className='p-0'>
               <Container className='p-0'>
                    <Col className='wbg-dark p-4 mt-n1' lg={8} sm={12}>
                         <h1 className='mb-0 bfs-1 text-white'>
                              Membership<br className='lh-1' />Procedure
                         </h1>
                         <p className='fs-1 fw-500 text-white'> FICAC Member<br />Corps/Associations</p>
                    </Col>
               </Container>
               <Container className='mt-5'>
                    <Row>
                         <Col lg={12}>
                              <h3 className='txt-dark fw-600 fs-1'>Application And Membership Procedures</h3>
                              <p className='fs-5 fw-300'>
                                   Summarized below are the procedures that a Consular Corps or Association or a Regional Association is asked to follow to become a Member of the FICAC AISBL, and the general procedures for remaining a Member Corps/Association or Regional Association of FICAC.
                              </p>
                              <h4 className='txt-dark fw-600 fs-3'>Applications</h4>
                              <p className='fs-5 fw-300'>
                                   The application procedure shows directly from article 4 of the Official Statutes of FICAC AISBL.
                              </p>
                              <p className='fs-4 fw-500'>Article 4. Membership </p>
                              <p className='fs-5 fw-300'>
                                   All Associations are eligible to become Members of the Federation, provided that their statutes are consistent with the Constitution of the Federation, and that they accept the Constitution of the Federation, subject to the confirmation of their membership by the General Assembly.
                              </p>
                              <h4 className='txt-dark fw-600 fs-3'>Application Dossier</h4>
                              <p className='fs-5 fw-300'>
                                   To apply to join FICAC as a member Corps/Association or Regional Association, the organisation is asked to send documents to:
                              </p>

                              <p className='fs-5 fw-600'>FICAC aisbl</p>
                              <p className='fs-5 fw-600 lh-1'>Hon. Purrshottam Bhaggeria, Secretary General</p>
                              <p className='fs-5 fw-300 lh-1'>Email: <Link href="mailto:secretary.general@ficacworld.org" className='text-decoration-none'>secretary.general@ficacworld.org</Link></p>
                              <p className='fs-5 fw-600 lh-1'>Secretary’s General Office</p>
                              <p className='fs-5 fw-600 lh-1'>Sunil Kunj (Mr)</p>
                              <p className='fs-5 fw-300 lh-1'>Email:<Link href="mailto:secretary.general.office@ficacworld.org" className='text-decoration-none'> secretary.general.office@ficacworld.org</Link></p>
                              <p className='fs-5 fw-300 lh-1'>Tel.: +91-11-49502068 Mobile & WhatsApp: +91-9910566559</p>
                              <p className='fs-5 fw-300 lh-1'>Office: “Bhaggeria House”, 43 Community Centre, New Friends Colony, New Delhi-110025, India</p>

                         </Col>
                    </Row>
               </Container>
               <Container className='mt-4'>
                    <h3 className='fs-5 fw-600'>The following documents:</h3>
                    <ul className='disc px-3'>
                         <li className='fs-5 fw-200'>A letter requesting membership in FICAC (see model of Application letter) </li>

                         <li className='fs-5 fw-200'>A copy of the Corps’/Association’s or Regional Association’s Constitution, By-Laws and other Regulations </li>
                         <li className='fs-5 fw-200'>A copy of the Corps’/Associations or Regional Association’s Membership lists (with details of all members). Specification of the Executive Board is necessary.</li>
                    </ul>
               </Container>
               <Container className='py-2 pb-3'>
                    <h4 className='txt-dark fw-600 fs-3'>Application Procedure</h4>
                    <p className='fs-5 fw-200'>The application documents are forwarded to the members of the FICAC Legal Committee, responsible for membership, for their review and subsequent recommendation to the Board of Directors. After approval, the Board of Directors may grant provisional membership to the new member, subject to confirmation by the General Assembly. </p>
                    <p className='fs-5 fw-200'>The Board of Directors reviews the recommendation and submits the application with all recommendations to the FICAC AISBL General Assembly Meeting, which is usually held every 3 years in conjunction with the World Congress of Consuls. </p>
                    <p className='fs-5 fw-200'>A yes vote means that the Corps/Association of Regional Associations can become a Member of FICAC, once membership fees for the current year have been paid.</p>
                    <Link
                         href="/Membership Procedure.pdf"
                         target='_blank'
                         className='btn btn-primary px-3 py-2 fs-5 wbg-blue border-0'
                    >
                         View Procedure
                    </Link>
               </Container>
               <Container>
                    <h4 className='txt-dark fw-600 fs-3'>Information About The Application</h4>
                    <p className='fs-5 fw-200'>The Secretary General of FICAC would normally acknowledge receipt of an application and subsequently inform the applying Organization about the decision of the Board of Directors for provisional membership and also about the decision of the General Assembly Meeting.</p>
               </Container>
               <Container className='mb-4'>
                    <h4 className='txt-dark fw-600 fs-3'>Application Form Membership</h4>
                    <p className='fs-5 fw-200'>If you wish to become a Member of FICAC AISBL, please complete the Application Form below.</p>
                    <Link
                         href="/Membership Form.pdf"
                         target='_blank'
                         className='btn btn-primary px-3 py-2 fs-5 wbg-blue border-0'
                    >
                         Download Form
                    </Link>

               </Container>
          </Container>
     )
}

export default HomeBannerContent

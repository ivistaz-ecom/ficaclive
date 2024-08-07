'use client'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap'

const Footer = () => {



  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  const [domainName, setDomainName] = useState('');


  // Update current year when component mounts
  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  useEffect(() => {
    setDomainName(window.location.hostname);
  }, []);

  const footerBg = {
    background: '#001C79',

  }

  return (
    <>
      <Container fluid className='text-white bottom-0' style={footerBg}>
        <Container className='py-3'>
          <Row className='d-flex flex-lg-row flex-column'>
            <Col className='text-lg-start text-center'>
              <p className='p-2 m-0 fs-6 text-lg-start text-center fw-100'>
                Copyright {currentYear} {domainName}
              </p>
            </Col>
            <Col>
              <div className='d-flex flex-row justify-content-lg-end justify-content-center gap-3 fs-4 p-0 m-0'>
                <div className=''>
                  <Link
                    href="https://www.linkedin.com/company/worldfederationofconsuls/"
                    target='_blank'
                    className='text-decoration-none text-white'
                  >
                    <i class="bi bi-linkedin" ></i>
                  </Link>
                </div>

                <div>
                  <Link
                    href="https://twitter.com/ficacworld"
                    target='_blank'
                    className='text-decoration-none text-white'
                  >

                    <i class="bi bi-twitter-x"></i>
                  </Link>
                </div>

                <div>
                  <Link
                    href="https://www.facebook.com/ficacworld/"
                    target='_blank'
                    className='text-decoration-none text-white'
                  >
                    <i class="bi bi-facebook"></i>
                  </Link>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </Container>
    </>
  )
}

export default Footer

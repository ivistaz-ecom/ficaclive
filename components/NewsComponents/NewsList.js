'use client'
import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import configData from "../../config.json";
import Image from 'next/image'


const NewsList = () => {

  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      let result = await fetch(`${configData.SERVER_URL}posts?categories=1&productions=${configData.SERVER}&_embed&per_page=15`);
      if (!result.ok) {
        throw new Error(`HTTP error! Status: ${result.status}`);
      }
      result = await result.json();
      setData(result);
    } catch (error) {
      console.error('Error fetching data', error);
    }
  };


  useEffect(() => {
    fetchData();
  })

  return (
    <>
      <Container className='my-5'>
        <Row className='' >
          {data.map((post, index) => (
            <Col lg={4} className='mt-4 d-flex flex-column' key={index}>
              <Col className='bg-white'>
                <div class="card text-center border-0" >
                {/* {post._embedded['wp:featuredmedia'][0].source_url} */}
                  <Image src={post._embedded['wp:featuredmedia'][0].source_url} alt={post.title.rendered} width={336} height={222} className='w-100 h-100' />
                  <div class="card-body h-100">
                    <h5 class="card-title text-start txt-blue fs-4 fw-400" dangerouslySetInnerHTML={{ __html: post.title.rendered }} style={{ minHeight: '120px' }} />
                    {/* <p class="card-text text-start fs-5 fw-300 two-line-paragraph" dangerouslySetInnerHTML={{ __html: post.acf.excerpt }} /> */}
                    {post.acf && post.acf.excerpt && (
                      <p class="card-text text-start fs-5 fw-300 two-line-paragraph"
                        style={{ color: "#001C79" }} dangerouslySetInnerHTML={{ __html: post.acf.excerpt }} />
                    )}
                    <Link href={`/news/${post.slug}`} 
                    // target='_blank'  
                    className='btn btn-primary wbg-blue border-0 px-3 py-2 mt-3'>Read More</Link>
                  </div>
                </div>
              </Col>
            </Col>
          ))}
        </Row>
      </Container>

      {/* News Archive */}
      {/* <Container className='mt-5'>
        <Row>
          <Col className='d-flex justify-content-center mb-4  d-inline-flex gap-1'   >
            <Link href="/news-archive"
              style={{
                textDecoration: "none",
                color: "white",

              }}>
              <p className='p-2 d-inline-flex rounded-2 '
                style={{
                  backgroundColor: "#001C79",
                }}
              >
                News Archive
                <i class="bi bi-arrow-right mx-1"></i>
              </p>
            </Link>
          </Col>
        </Row>
      </Container> */}
    </>

  )
}

export default NewsList

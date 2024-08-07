'use client'
import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import Carousel from 'react-multi-carousel';
import Link from 'next/link';
import HomeConcludedEvents from './HomeConcludedEvents';
import configData from "../../config.json";

const HomeUpcomingEvents = () => {
  const [isData, setIsData] = useState([]);

  const fetchData = async () => {
    try {
      // let result = await fetch(`https://ficac.ivistaz.co/wp-json/wp/v2/directors?_embed&per_page=100`);
      let result = await fetch(`${configData.SERVER_URL}posts?categories=14&productions=${configData.SERVER}&_embed`);
      result = await result.json();
      setIsData(result);
      // console.log(result);
    } catch {
      // console.log("Error fetching data");
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };



  return (
    <>
      <Container fluid className='wbg-light p-4 px-2 pb-5'>
        <Container>

          <style>
            {`
          .react-multi-carousel-list {
            display: flex;
            align-items: center;
            overflow: hidden;
            position: relative;
            flex-direction: column;
          }
        `}
          </style>
          <h3 className="fs-1 txt-dark text-center py-3">
            Upcoming Events
          </h3>

          <Row>
            <Col className=''>
              <Carousel
                swipeable={true}
                draggable={false}
                showDots={false}
                responsive={responsive}
                ssr={true}
                infinite={false}
                autoPlaySpeed={1500}
                keyBoardControl={true}
                customTransition="all .5"
                transitionDuration={1000}
                containerClass="carousel-container"
                removeArrowOnDeviceType={["tablet", "mobile", "desktop"]}
                showArrows={false}
                dotListClass="custom-dot-list-style"
                itemClass="carousel-item-padding-40-px"
              >
                {isData.map((post, index) => (

                  <div
                    key={index}
                  >
                    <div class="card border-0">

                      {post._embedded["wp:featuredmedia"] && post._embedded["wp:featuredmedia"][0] && post._embedded["wp:featuredmedia"][0].source_url && (
                        <Image
                          src={post._embedded["wp:featuredmedia"][0].source_url}
                          alt=''
                          width={300}
                          height={300}
                          className="w-100 h-auto card-img-top"
                        />
                      )}

                      {/* <Image
                        src="/upcoming-events/south_east.jpeg"
                        alt=''
                        width={300}
                        height={300}
                        className="w-100 h-auto card-img-top"
                      /> */}

                      {/* <h5 class="card-title txt-dark fw-400 text-start mh-104" dangerouslySetInnerHTML={{ __html: post.title.rendered }}/> */}
                      {post.acf.excerpt && (
                        <div class="text-center">
                          <p class="card-text fs-6 fw-300 py-4">
                            {post.acf.excerpt}
                          </p>
                        </div>
                      )}

                      <div>
                        {post.content.rendered && (
                          <Col className='py-4 text-center'>
                            <Link href={`/upcoming-events/${post.slug}`} target='_blank'>
                              <p
                                className='rounded-2 py-2 px-3 d-inline-block text-white mb-0'
                                style={{ backgroundColor: "#001C79" }}
                              >
                                Read More
                              </p>
                            </Link>
                          </Col>
                        )}
                      </div>
                    </div>
                  </div>
                ))}

              </Carousel>
            </Col>
          </Row>
        </Container>
      </Container>
    </>
  )
}

export default HomeUpcomingEvents

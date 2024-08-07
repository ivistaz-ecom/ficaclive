"use client";
import React, { useEffect, useState } from "react";
import { Container, Row, Col, Image, Card, Button } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import Link from "next/link";
import configData from "../../config.json";

const HomeConcludedEvents = () => {
  const [isData, setIsData] = useState([]);

  const fetchData = async () => {
    try {
      // let result = await fetch(`https://ficac.ivistaz.co/wp-json/wp/v2/directors?_embed&per_page=100`);
      let result = await fetch(`${configData.SERVER_URL}posts?categories=13&productions=${configData.SERVER}&_embed`
      );
      result = await result.json();
      setIsData(result);
      // console.log(result);
    } catch {
      // console.log("Error fetching data");
    }
  };
  // 
  useEffect(() => {
    fetchData();
  }, []);


  const responsive1 = {
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
      <Container>
        <style>
          {`
          .react-multi-carousel-list {
            display: flex;
            align-items: center !important;
            overflow: hidden;
            position: relative;
            flex-direction: column;
          }
          @media (max-width: 768px) {
            .react-multi-carousel-list {
              display: flex;
              align-items: center !important;
              overflow: hidden;
              position: relative;
              flex-direction: column;
              padding: 0px !important;
              flex-wrap: wrap !important;
              justify-content: center !important;
            }
        `}
        </style>
        <h3 className="fs-1 txt-blue text-center py-5">
          Concluded Events
        </h3>

        <Col className="g-0">
          <Carousel
            swipeable={true}
            draggable={false}
            showDots={false}
            responsive={responsive1}
            ssr={true}
            infinite={false}
            autoPlaySpeed={1500}
            keyBoardControl={true}
            customTransition="all .5"
            transitionDuration={1000}
            containerClass="carousel-container"
            removeArrowOnDeviceType={["tablet", "desktop"]}
            showArrows={false}
            dotListClass="custom-dot-list-style"
            itemClass="carousel-item-padding-40-px"

          >
            {isData.map((post) => (
              <div
                key={post.id}
              >
                <Col className="p-0 m-2 mt-0" >
                  <div class="card border-0">
                    <Image
                      src={post._embedded["wp:featuredmedia"][0].source_url}
                      width={300}
                      height={300}
                      className="w-100 h-auto card-img-top"
                      alt=""
                    />
                    <div class="card-body text-center">
                      {post.title.rendered && (
                        <h5 class="card-title txt-dark fw-400 text-start mh-104" dangerouslySetInnerHTML={{ __html: post.title.rendered }} />
                      )}
                      {/* <p class="card-text fs-5 fw-300 text-start p-3">FICAC, the World Federation of Consuls had its 1st Latin America Conference in San Pedro Sula, Honduras, from August 31st, 2023- September 3rd 2023, which was organized by the Association Consular Corps of San Pedro Sula.</p> */}
                      {post.acf.excerpt && (
                        <p class="card-text fs-5 fw-300 text-start p-3" dangerouslySetInnerHTML={{ __html: post.acf.excerpt }}>
                        </p>
                      )}
                      {post.acf.url && (
                        <Link href={post.acf.url} class="btn wbg-blue py-2 px-3 m-2 text-white btn-primary border-0" target="_blank">
                          Read More
                        </Link>
                      )}
                    </div>
                  </div>
                </Col>
              </div>
            ))}
          </Carousel>
        </Col>
      </Container>
    </>
  );
};

export default HomeConcludedEvents;

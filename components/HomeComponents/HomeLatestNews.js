'use client'
import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Carousel from 'react-multi-carousel';
import Link from 'next/link';
import configData from "../../config.json";
import Image from 'next/image'


import 'react-multi-carousel/lib/styles.css';

const HomeLatestNews = () => {

  const [isData, setIsData] = useState([]);

  const customDotListStyle = {
    position: 'absolute',
    bottom: '0',
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
    padding: '10px 20px',
  };

  const customDotStyle = {
    width: '10px',
    height: '10px',
    margin: '10px 10px',
    backgroundColor: '#810100',
    borderRadius: '50%',
    cursor: 'pointer',
  };

  const fetchData = async () => {
    try {
      let result = await fetch(`${configData.SERVER_URL}posts?categories=11&productions=${configData.SERVER}&_embed`);
      result = await result.json();
      setIsData(result);
      // console.log(result)
    } catch {
      console.log('Error fetching data');
    }
  }

  useEffect(() => {
    fetchData();
  }, []); // Add an empty dependency array to avoid infinite loop

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 2
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <>
      <Container className=''>
        <h3 className="fs-1 txt-dark text-center py-lg-5">Latest News</h3>
        <Carousel
          swipeable={true}
          draggable={false}
          showDots={false}
          responsive={responsive}
          ssr={true}
          infinite={false}
          autoPlaySpeed={500}
          keyBoardControl={true}
          customTransition="all .5"
          transitionDuration={200}
          containerClass="carousel-container"
          removeArrowOnDeviceType={["tablet", "desktop"]}
          showArrows={false}
          dotListClass="custom-dot-list-style"
          itemClass="carousel-item-padding-40-px"
          customDotListClass='custom-dot-list-style'

        >
          {isData.map((news) => (
            <div class="card text-white rounded-0 m-1 g-0" key={news.id}>
              <div class="row g-0 d-flex flex-lg-row flex-column">
                <div class="col-lg-7 g-0">
                  <Image
                    src={news.acf.latest_news_image}
                    alt={news.title.rendered}
                    width={300}
                    height={300}
                    class="w-100 h-100"
                  />
                </div>
                <div class="col-lg-5 wbg-blue">
                  <div class="card-body">
                    <h5 class="card-title" dangerouslySetInnerHTML={{ __html: news.title.rendered }} />
                    <p class="card-text fs-6 fw-200" dangerouslySetInnerHTML={{ __html: news.acf.excerpt }} />
                    <div className='text-center'>
                      <Link className="text-decoration-none btn-latest-news txt-blue py-2 px-3 rounded-2 text-center border-0" target='_blank' href={`/news/${news.slug}`}>Read More</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}

        </Carousel>

      </Container>
    </>
  );
}

export default HomeLatestNews;

"use client";
import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from "next/link";
import configData from "../../config.json";
import Image from "next/image";

import "react-multi-carousel/lib/styles.css";

const HomeLatestNews = () => {
  const [isData, setIsData] = useState([]);

  const fetchData = async () => {
    try {
      let result = await fetch(
        `${configData.SERVER_URL}posts?categories=11&productions=${configData.SERVER}&_embed`
      );
      result = await result.json();
      setIsData(result);
      // console.log(result)
    } catch {
      console.log("Error fetching data");
    }
  };
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          dots: true,
          arrows : false,
        },
      },
      {
        breakpoint: 300,
        settings: "unslick", // destroys slick
      },
    ],
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <style>
        {`
         .custom-height {
            height:320px;
          }
        .slick-next:before {
    content: '→';
    color: black;
}
.slick-prev:before {
    content: '←';
    color: black !important;
}

        `}
      </style>
      <Container className="">
        <h3 className="fs-1 txt-dark text-center py-lg-5">Latest News </h3>
        {/* <Carousel
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

        </Carousel> */}
        <div className="slider-container">
          <Slider {...settings}>
            {isData.map((news) => (
              <div
                class="card text-white rounded-0 m-1 g-0 border-0 bg-transparent"
                key={news.id}
              >
                <div className="p-2">
                  <div class="row g-0 d-flex flex-lg-row flex-column border ">
                    <div class="col-lg-6 g-0 bg-white d-flex flex-column justify-content-center align-items-center custom-height">
                      <Image
                        src={news.acf.latest_news_image}
                        alt={news.title.rendered}
                        width={400}
                        height={300}
                        class="w-100 h-100 img-fluid"
                      />
                    </div>
                    <div class="col-lg-6  wbg-blue">
                      <div class="card-body">
                        <h5
                          class="card-title post-content-title"
                          dangerouslySetInnerHTML={{
                            __html: news.title.rendered,
                          }}
                        />
                        <p
                          class="card-text fs-6 fw-200 post-content"
                          dangerouslySetInnerHTML={{ __html: news.acf.excerpt }}
                        />
                        <div className="text-center">
                          <Link
                            className="text-decoration-none btn-latest-news txt-blue py-2 px-3 rounded-2 text-center border-0"
                            target="_blank"
                            href={`/news/${news.slug}`}
                          >
                            Read More
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </Container>
    </>
  );
};

export default HomeLatestNews;

// 'use client'
// import React from "react";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// function MultipleItems() {
//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 2,
//     slidesToScroll: 1,
//   };
//   return (
//     <div className="slider-container">
//       <Slider {...settings}>
//         <div>
//           <h3>1</h3>
//         </div>
//         <div>
//           <h3>2</h3>
//         </div>

//       </Slider>
//     </div>
//   );
// }

// export default MultipleItems;

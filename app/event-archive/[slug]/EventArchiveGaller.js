'use client'
import React, { useState, useEffect } from 'react';
import configData from '../../../config.json';
import { Col, Container, Row , Button } from 'react-bootstrap';
import Image from 'next/image';
import { IoArrowBackSharp } from "react-icons/io5";
import Link from 'next/link';



const EventArchiveGallery = ({ slug }) => {
    const [data, setData] = useState(null);
    const [selectImage, setSelectImage] = useState(false);
  
    const [selectedImage, setSelectedImage] = useState(null);
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const res = await fetch(`${configData.SERVER_URL}events_gallery?slug=${slug}`);
          if (!res.ok) {
            throw new Error(`Failed to fetch data. Status: ${res.status}`);
          }
          const result = await res.json();
          setData(result);
          // console.log(result);
  
        } catch (error) {
          console.error('Error fetching data:', error.message);
        }
      };
  
      fetchData();
    },);
  
    const openSelectedImage = (photo) => {
      setSelectedImage(photo);
      setSelectImage(true);
    };
  
    const closeSelectedImage = () => {
      setSelectImage(false);
      setSelectedImage(null);
    };
  
  
    // Add a useEffect hook to handle body class
    useEffect(() => {
      // Add 'no-scroll' class to body when the popup is open
      if (selectImage) {
        document.body.classList.add('no-scroll');
      } else {
        // Remove 'no-scroll' class when the popup is closed
        document.body.classList.remove('no-scroll');
      }
  
      // Cleanup function to remove the class when the component unmounts
      return () => {
        document.body.classList.remove('no-scroll');
      };
    }, [selectImage]);
  
  
    if (!data || !Array.isArray(data)) {
      return <p>Please wait..</p>;
    }
  
    return (
      <>
        <Container>
        <nav class="navbar navbar-light">
      <div class="container">
        <Link class="navbar-brand" href="/event-archive">
          <IoArrowBackSharp size={35} /> Back to Events Archive
        </Link>
      </div>
    </nav>
          <div>
            {/* {slug} */}
            <Row>
              {data.map((post) => (
                <>
                  <Col
                    className="pt-4 mb-4"
                  >
                    <h1 className="fw-bold" dangerouslySetInnerHTML={{ __html: post.title.rendered }}>
                    </h1>
                    <hr className="h-line"
                      style={{ color: "#810400" }} />
                    <Row className='d-flex flex-lg-row flex-column gap-0'>
                      {post.acf.photo_gallery.gallery_1[0].map((photo, index) => (
                        <Col
                          key={photo.id}
                          md={4}
                          className='p-0 p-1'
                        >
                          {post.acf.title}
                          {/* Desktop View */}
                          <Col
                            className='p-0 d-lg-block d-none'
                            // style={{
                            //   marginTop: `${index % 4 === 0 ? 0 : 40 * (index % 4)}px`, // Adjust the margin-top as needed
                            //   marginLeft: `${index % 4 === 0 ? 0 : -50}px`, // 0 for the first, 30 for the rest
                            // }}
                          >
                            <Image src={photo.full_image_url}
                              alt=""
                              width={280}
                              height={280}
                              className="w-100 h-auto"
                            //   style={{ objectFit: 'cover', objectPosition: 'center center' }}
                            //   onClick={() => openSelectedImage(photo)}
                            />
                          </Col>
  
  
                          {/* Mobile View */}
                          <Col
                            className='p-1 d-lg-none d-block'
                          >
                            <Image src={photo.full_image_url} alt=""
                              width={280}
                              height={280}
                              className="w-100 h-auto"
                            />
                          </Col>

                        </Col>
                      ))}
                    </Row>

                    <Row className='d-flex flex-lg-row flex-column flex-wrap'>
                      {post.acf.photo_gallery.gallery_2[1].map((photo, index) => (
                        <Col
                          key={photo.id}
                          md={3}
                        >
                          {post.acf.title_2}
                          {/* Desktop View */}
                          <Col
                            className='p-0 d-lg-block d-none'
                            // style={{
                            //   marginTop: `${index % 4 === 0 ? 0 : 40 * (index % 4)}px`, // Adjust the margin-top as needed
                            //   marginLeft: `${index % 4 === 0 ? 0 : -50}px`, // 0 for the first, 30 for the rest
                            // }}
                          >
                            <Image src={photo.full_image_url} alt=""
                              width={280}
                              height={280}
                              className="w-100 h-auto cursor-pointer"
                            />
                          </Col>
  
  
                          {/* Mobile View */}
  
                          <Col
                            className='p-0 d-lg-none d-block mt-3'
                          >
                            <Image src={photo.full_image_url} alt=""
                              width={280}
                              height={280}
                              className="w-100 h-auto cursor-pointer"
                            />
                          </Col>
  
                        </Col>
                      ))}
                    </Row>
                    
                  </Col>
                  
                </>
              ))}
            </Row>
          </div>
          <div className='py-4'>
              <Link href="/event-archive" className='btn wbg-blue py-2 px-3 m-2 text-white btn-primary border-0'>Go Back to Events Archive</Link>
            </div>
          
        </Container>
  
            {/* {selectImage && (
            <div className='position-fixed bg-black bg-opacity-50 top-0 bottom-0 end-0 start-0' onClick={closeSelectedImage}>
                <p className='position-absolute end-0 z-3 p-4 '>
                <i class="bi bi-x-square-fill text-white fs-3 cursor-pointer"></i>
                </p>
                <div className='p-3'>
                <div
                    className='position-absolute top-50 start-50 translate-middle'
                >
                    <div>
                    <Image
                        src={selectedImage.full_image_url}
                        alt=""
                        width={280}
                        height={280}
                        className="w-100 cursor-pointer"
                        style={{ objectFit: 'cover', objectPosition: 'center center' }}
                    />
                    </div>
                </div>
                </div>
            </div>
            )} */}
      </>
      );
};

export default EventArchiveGallery;

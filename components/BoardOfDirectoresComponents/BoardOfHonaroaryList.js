'use client'
import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Image, Modal, Button } from 'react-bootstrap';
import configData from "../../config.json";

const BoardOfHonoraryList = () => {
  const [posts, setPosts] = useState([]);
  const [selectedPost, setSelectedPost] = useState(null);
  const [showPopup, setShowPopup] = useState(false);

  const fetchPosts = async () => {
    try {
      const result = await fetch(`${configData.SERVER_URL}directors?categories=9&productions=${configData.SERVER}&per_page=100&_embed`);
      if (!result.ok) {
        throw new Error(`HTTP error! Status: ${result.status}`);
      }
      const postsData = await result.json();
      setPosts(postsData);
      // console.log(result)
    } catch (error) {
      console.error('Error fetching posts', error);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const openPopup = (post) => {
    setSelectedPost(post);
    setShowPopup(true);
  };

  const closePopup = () => {
    setSelectedPost(null);
    setShowPopup(false);
  };

  return (
    <>
      <Container className='my-5'>
        <h3 className='txt-dark mt-5 mb-0 fs-2' >Honorary Members of the Board of Directors</h3>
        <Row className='d-flex flex-lg-row flex-column'>
          {posts.map((items, index) => (
            <Col lg={3} className='mt-4 d-flex flex-column ' key={index}>
              <Col className='bg-white'>
                <div className="card border-0 text-center">
                  <Image src={items._embedded['wp:featuredmedia'][0].source_url} alt={items.title.rendered} width={250} height={250} className="w-100 h-100 px-4" />
                  <div class="card-body">
                    <h5 class="card-title fw-400 txt-blue" style={{ minHeight: '45px' }}>{items.acf.designation}</h5>
                    <p class="card-text fs-6" style={{ minHeight: '55px' }}>{items.acf.name}</p>
                    <a href={items.acf.pdf_url} target="_blank" rel="noopener noreferrer" class="btn btn-primary wbg-blue border-0">Read More</a>
                  </div>
                </div>
              </Col>
            </Col>
          ))}
        </Row>
      </Container>

      {/* Popup */}
      {/* <Modal
        show={showPopup}
        onHide={closePopup}
        className='text-white align-items-center'
      >
        <div style={{ backgroundColor: "#810100" }} className='text-white'>
          <Modal.Header>

            <Col
              className="position-absolute top-0 end-0 p-3"
              onClick={closePopup}
            >
              <i
                class="bi bi-x-circle d-flex flex-row justify-content-end fs-4 text-white cursor-pointer"
              ></i>
            </Col>
            <Modal.Title>{selectedPost?.acf.designation}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>{selectedPost?.acf.name}</p>
            <p>{selectedPost?.acf.honorary}</p>
            <div dangerouslySetInnerHTML={{ __html: selectedPost?.content.rendered }} /> */}

      {/* Add more content here as needed */}
      {/* </Modal.Body>
        </div>
      </Modal> */}
    </>
  );
};

export default BoardOfHonoraryList;

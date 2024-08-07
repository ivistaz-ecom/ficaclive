'use client'
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { Col, Container, Image, Row, Modal, Button } from 'react-bootstrap';
import configData from "../../config.json";

const BoardOfDirectorsList = () => {
  const [data, setData] = useState([]);
  const [selectedPost, setSelectedPost] = useState(null);
  const [showPopup, setShowPopup] = useState(false);


  const fetchData = async () => {
    try {
      const result = await fetch(`${configData.SERVER_URL}directors?categories=10&productions=${configData.SERVER}&per_page=20&_embed`);
      const jsonData = await result.json();
      setData(jsonData);
    } catch (error) {
      console.error('Error fetching data', error);
    }
  };

  useEffect(() => {
    fetchData();
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

    <Container className='my-5'>
      <Row className='d-flex flex-lg-row flex-column'>
        {data.map((items, index) => (
          <Col lg={3} className='mt-4 d-flex flex-column' key={index}>
            <Col className='bg-white'>
              <div className="card border-0 text-center">
              
                <Image src={items._embedded['wp:featuredmedia'][0].source_url} alt={items.title.rendered} width={250} height={250} className="w-100 h-100 px-4" />
         
                <div class="card-body">
                  <h5 class="card-title fw-400 txt-blue" style={{ minHeight: '45px' }}>{items.acf.designation}</h5>
                  <p class="card-text fs-6" style={{ minHeight: '55px' }} dangerouslySetInnerHTML={{ __html:items.acf.name}} />
                  <a href={items.acf.pdf_url} target="_blank" rel="noopener noreferrer" class="btn btn-primary wbg-blue border-0">Read More</a>
                </div>
              </div>
            </Col>
          </Col>
        ))}
      </Row>
    </Container>


  );
};

export default BoardOfDirectorsList;
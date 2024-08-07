'use client'
import Link from 'next/link';
import React, { useState, useEffect } from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import configData from "../../config.json";

const EventGalleryLists = () => {
    const [data, setData] = useState([]);

    // const Acf_URL = `${configData.SERVER_URL}events_gallery?productions=${configData.SERVER}&_embed`;

    const categoryId = 15; // Your category ID
    const Acf_URL = `${configData.SERVER_URL}events_gallery?productions=${configData.SERVER}&categories=${categoryId}&_embed`;

    const fetchPosts = async () => {
        try {
            const result = await fetch(Acf_URL);

            if (!result.ok) {
                throw new Error(`HTTP error! Status: ${result.status}`);
            }

            const postsData = await result.json();
            // console.log('API Response:', postsData);

            if (typeof postsData === 'object') {
                setData(postsData);
            }
        } catch (error) {
            console.error('Error fetching posts', error);
        }
    };

    useEffect(() => {
        fetchPosts();
    }, []);

    return (
        <>
          {/* Events Archive */}
          <Container className='mt-5 '>
                <Row>
                    <Col className='d-flex justify-content-end mb-4  d-inline-flex gap-1'   >
                        <Link href="/event-archive"
                            style={{
                                textDecoration: "none",
                                color: "white",

                            }}>
                            <p className='px-3 py-2 d-inline-flex rounded-2 '
                                style={{
                                    backgroundColor: "#001C79",
                                }}
                            >
                                Event Archive
                                <i class="bi bi-arrow-right mx-1"></i>
                            </p>
                        </Link>
                    </Col>
                </Row>
            </Container>
            <Container className='py-3 '>
                {data.map((item, index) => (
                    <div class="card mb-3 rounded-3 btn-border event-card" key={index}>
                        <div class="row g-0 p-0 p-3">
                            <div class="col-md-10">
                                <div class="card-body ">
                                    <h5 class="card-title fs-5 fw-500" dangerouslySetInnerHTML={{ __html: item.title.rendered }} />
                                    <p class="card-text fs-6 fw-300" >{item.acf.date}</p>
                                </div>
                            </div>
                            <div class="col-md-2 justify-content-center align-self-center text-center ">
                                <Link href={`/gallery/${item.slug}`} className='btn btn-primary border-0 px-3 py-2 fs-5 fw-300 event-button' style={{ backgroundColor: '#001C79' }}>View Photos</Link>
                            </div>
                        </div>
                        {/* backgroundColor: '#001CAA' */}
                    </div>

                ))}
            </Container>

        

        </>


    )
}

export default EventGalleryLists

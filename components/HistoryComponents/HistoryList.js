"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import configData from "../../config.json";
import Image from 'next/image'

const HistoryList = () => {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      let result = await fetch(`${configData.SERVER_URL}history?productions=${configData.SERVER}&per_page=20&_embed`);

      result = await result.json();
      setData(result);
      // console.log(result);
    } catch {
      // console.log("Error fetching data");
    }
  };

  useEffect(() => {
    fetchData();
  });

  return (
    <Container className="px-0">
      <Row className="d-flex flex-lg-row flex-column mb-4 p-0 m-0">
        {data.map((post, index) => (
          <Col sm={6} lg={3} className="mt-4 p-2 d-flex flex-column align-items-stretch" key={index}>
            <div class="card p-4" >
              <div>
                <Image
                  src={post._embedded["wp:featuredmedia"][0].source_url}
                  alt={post.title.rendered}
                  className="card-img-top w-100 h-100"
                  width={300}
                  height={300}
                />
              </div>
              <div class="card-body">
                <h5 class="card-title fs-6 fw-200 txt-blue" dangerouslySetInnerHTML={{ __html: post.title.rendered }} />
                <p class="card-text fs-6 fw-600 txt-blue" >{post.acf.year}</p>
              </div>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default HistoryList;

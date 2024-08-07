"use client";
import React, { useState, useEffect } from "react";
import { Col, Row, Container, Button } from "react-bootstrap";
import configData from "../../config.json";
import Image from 'next/image'


const CentralCommittiees = () => {
  const [posts, setPosts] = useState([]);
  const [isPopupShow, setIsPopupShow] = useState(false);
  const [selectedPost, setSelectedPost] = useState(null);

  const background = {
    backgroundImage: "url('/central_banner.png')",
    height: "90vh",
    fontSize: "50px",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };

  const loopBg = {
    background: "#810100",
  };

  const closePopup = () => {
    setIsPopupShow(false);
    setSelectedPost(null);
  };

  const fetchPosts = async () => {
    try {
      const result = await fetch(`${configData.SERVER_URL}committiee?categories=7&productions=${configData.SERVER}&per_page=20&_embed`);
      if (!result.ok) {
        throw new Error(`HTTP error! Status: ${result.status}`);
      }
      const postsData = await result.json();
      setPosts(postsData);
      // console.log(postsData);
    } catch (error) {
      console.error("Error fetching posts", error);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const openPopup = (post) => {
    setSelectedPost(post);
    setIsPopupShow(true);
  };

  return (
    <>
      <Container>
        {posts.map((post, index) => (


          <div class="card mb-3" key={index}>
            <div class="row g-0">
              <div class="col-md-4">
                <Image
                  src={post._embedded["wp:featuredmedia"][0].source_url}
                  alt={post.title.rendered}
                  width={200}
                  height={200}
                  className="w-100 h-100"
                />
              </div>
              <div class="col-md-8 wbg-dark text-white">
                <div class="card-body justify-content-center">
                  <h5 class="card-title fs-4 fw-500" dangerouslySetInnerHTML={{ __html: post.title.rendered }} />
                  <p class="card-text fs-5 lh-1 fw-200" dangerouslySetInnerHTML={{ __html: post.acf.honorary }} />
                  <p className="fs-5 lh-1 fw-200" dangerouslySetInnerHTML={{ __html: post.acf.name }} />
                  <p className="fs-5 lh-1 fw-200" dangerouslySetInnerHTML={{ __html: post.acf.excerpt_committee }} />
                </div>
              </div>
            </div>
          </div>
        ))}

      </Container>

    </>
  );
};

export default CentralCommittiees;

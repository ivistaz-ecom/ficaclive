'use client'
import React, { useEffect, useState } from 'react'
import { Container, Row, Col, Image } from 'react-bootstrap';
import configData from "../../config.json";

const RegionalCommittees = () => {
  const [posts, setPosts] = useState([]);


  const loopBg = {
    background: '#001C79'
  }

  const fetchPosts = async () => {
    try {
      // Replace 'your_acf_category_field' with the actual name of your ACF category field            const result = await fetch('https://beta.ficacworld.org//wp-json/wp/v2/committiee?categories=8&per_page=100');
      const result = await fetch(`${configData.SERVER_URL}committiee?categories=8&productions=${configData.SERVER}&per_page=100&_embed`);

      // const result = await fetch('https://beta.ficacworld.org//wp-json/wp/v2/committiee?categories=7?_embed');
      if (!result.ok) {
        throw new Error(`HTTP error! Status: ${result.status}`);
      }
      const postsData = await result.json();
      setPosts(postsData);
      // console.log(postsData);
    } catch (error) {
      console.error('Error fetching posts', error);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
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
            <div class="col-md-8 wbg-blue text-white">
              <div class="card-body justify-content-center">
                <h5 class="card-title fs-4 fw-500" dangerouslySetInnerHTML={{ __html: post.title.rendered }} />
                <p class="card-text fs-5 lh-1 fw-200" dangerouslySetInnerHTML={{ __html: post.content.rendered }} />
              </div>
            </div>
          </div>
        </div>
      ))}

    </Container>
  );
}

export default RegionalCommittees





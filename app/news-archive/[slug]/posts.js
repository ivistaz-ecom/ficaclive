'use client'
import React, { useState, useEffect } from 'react';
import { Container, Button } from 'react-bootstrap';
import Footer from '../../../components/Shared/Footer';
import Link from 'next/link';
import { useRouter } from 'next/navigation'

const Posts = ({ slug, currentPage }) => {
  const [data, setData] = useState(null);
  const router = useRouter()
 

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`https://beta.ficacworld.org/wp-json/wp/v2/posts?slug=${slug}`);
        if (!res.ok) {
          throw new Error(`Failed to fetch data. Status: ${res.status}`);
        }
        const result = await res.json();
        setData(result);
      } catch (error) {
        console.error('Error fetching data:', error.message);
      }
    };

    fetchData();
  }, [slug]);

  if (!data || !Array.isArray(data)) {
    return <p>Please wait..</p>;
  }

  const goBack = () => {
    window.location.href = `/news-archive/?fromPage=3`;
  };

  return (
    <div>
      <Container className='d-flex flex-row justify-content-center'>
        {data.map((post) => (
          <div key={post.id} className='px-lg-3 col-lg-12 position-relative'>
            <div className='pt-5'>
              <div className='pt-5'>
                <h1 dangerouslySetInnerHTML={{ __html: post.title.rendered }} />
              </div>
            </div>
            <div>
              <hr />
            </div>
            <div className='py-4 fs-5 fw-300' dangerouslySetInnerHTML={{ __html: post.content.rendered }} />
            <div className='py-4'>
              <Button
                className='rounded-2 py-2 px-3 px-lg-2 d-inline-block text-white'
                style={{ backgroundColor: '#001C79' }}
                onClick={() => router.back()}
              >
                Go Back
              </Button>
            </div>
          </div>
        ))}
      </Container>
      <Footer />
    </div>
  );
};

export default Posts;

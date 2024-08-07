'use client'
import { useEffect, useState } from "react";
import { setLocalStorage, getLocalStorage } from "../../utils/localStorage";
import { Container, Button, Col } from 'react-bootstrap';
import Link from 'next/link';
import configData from "../../config.json";
import { useRouter } from 'next/router';



const ExampleComponent = () => {
  const [count, setCount] = useState(1);
  const [data, setData] = useState([]);
  const [totalPages, setTotalPages] = useState(1);
  const postsPerPage = 15;


  const fetchData = async () => {
    try {
      let result = await fetch(`${configData.SERVER_URL}posts?categories=16&_embed&page=${count}&per_page=${postsPerPage}`);
      console.log(result)
      if (!result.ok) {
        throw new Error(`HTTP error! Status: ${result.status}`);
      }
      const totalPagesHeader = result.headers.get('X-WP-TotalPages');
      setTotalPages(parseInt(totalPagesHeader, 10) || 1);

      result = await result.json();
      setData(result);
      console.log(result);
    } catch (error) {
      console.error('Error fetching data', error);
    }
  };


  useEffect(() => {
    const storedCount = getLocalStorage("count");
    if (storedCount !== null) {
      setCount(storedCount);
    }
    fetchData(count);
  }, [count]);


  const handlePageChange = (newPage) => {
    
    setCount(newPage);
    setLocalStorage("count", newPage);
    
    
  };



  return (
    <>
      <Container fluid>

      {/* <p>Count: {count}</p> */}
        <Container>
          <Col className="mt-lg-5">
            {data.map((post, index) => (
              <div key={index}>
                <div className='news-hover p-3'>
                  <p
                    className='fs-5 fw-300'
                  >
                    {new Date(post.date).toLocaleDateString()}
                  </p>
                  <Link
                    href={`/news-archive/${post.slug}`}
                    rel="noopener noreferrer"
                    style={{ textDecoration: 'none' }}
                    className='text-decoration-none text-black'
                  >
     
                    <p
                      className='fs-5'
                      dangerouslySetInnerHTML={{
                        __html: post.title.rendered.toUpperCase(),
                      }}
                    />
                  </Link>

                  <hr
                    className=''
                    style={{
                      height: '3px',
                      width: '15%',
                      backgroundColor: '#2680EB',
                    }}
                  />
                </div>
              </div>
            ))}

            {/* Pagination Section */}
            <div className="text-center my-4 d-flex flex-row justify-content-center">
              {count > 1 && (
                <i className="bi bi-arrow-left-circle-fill fs-2 cursor-pointer"
                  onClick={() => handlePageChange(count - 1)}
                >
                </i>
              )}

              <div className='d-flex flex-column justify-content-center'>
                <p className="mx-4 mb-0">
                  Page {count} of {totalPages}
                </p>
              </div>
              {count < totalPages && (
                <i className="bi bi-arrow-right-circle-fill fs-2 cursor-pointer"
                  onClick={() => handlePageChange(count + 1)}
                  disabled={count === totalPages}
                >
                </i>
              )}
            </div>
          </Col>
        </Container>
      </Container>
    </>
  );
};

export default ExampleComponent;

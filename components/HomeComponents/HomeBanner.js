'use client'
// Import necessary dependencies
import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';

const HomeBanner = () => {
  const [isMobile, setIsMobile] = useState(false);

  // Function to handle window resize
  const handleResize = () => {
    setIsMobile(window.innerWidth <= 768);
  };


  useEffect(() => {
    // Check if window is defined before accessing it
    if (typeof window !== 'undefined') {
      // Initial check on component mount
      handleResize();

      // Add event listener for window resize
      window.addEventListener('resize', handleResize);

      // Remove event listener on component unmount
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }
  }, []);


  // const backgroundStyles = {
  //   height: isMobile ? '280px' : '90vh',
  //   fontSize: '50px',
  //   width: '100%',
  //   backgroundSize: isMobile ? 'cover' : 'cover',
  //   backgroundRepeat: 'no-repeat',
  //   backgroundPosition: isMobile ? 'center center' : 'initial',
  //   backgroundImage: isMobile
  //     ? "url('/banner_images/home_page_banner.jpg')"
  //     : "url('/banner_images/home_page_banner.jpg')",
  // };

  const backgroundStyles = {
    height: isMobile ? '258px' : '90vh',
    fontSize: '50px',
    width: '100%',
    backgroundSize: isMobile ? 'cover' : 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: isMobile ? 'center center' : 'initial',
    backgroundImage: isMobile
      ? "url('/banner_images/home_banner.jpg')"
      : "url('/banner_images/home_banner.jpg')",
  };
  return (
    <Container fluid className='px-lg-5 p-0'>
      {/* <Container fluid style={{ backgroundImage: 'url(/home_banner.png)', height: '', backgroundSize: 'cover' }}> */}
      <Container fluid style={backgroundStyles}>
      </Container>
    </Container>
  );
};

export default HomeBanner;

"use client";
import React, { useState } from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
Link

import Link from "next/link";

const DesktopHeader = () => {
  const [isOnclick, setIsOnclick] = useState(false);
  const [isOnclick1, setIsOnclick1] = useState(false);
  const [isOnclick2, setIsOnclick2] = useState(false);
  const [isOnclick3, setIsOnclick3] = useState(false);

  // nav bar
  const [isOnclicknav1, setIsOnclicknav1] = useState(false);
  const [isOnclicknav2, setIsOnclicknav2] = useState(false);
  const [isOnclicknav3, setIsOnclicknav3] = useState(false);

  // nested nav bar
  const [isOnclicknestednav, setIsOnclicknestednav] = useState(false);

  const [isToggleMenu, setIsToogleMenu] = useState(false);

  const Width = useState("10px");
  const white = { background: "white" };
  const blue = { background: "#001C79" };

  const toggleMenuClick = () => {
    setIsToogleMenu(!isToggleMenu);
  };

  const handleOnclick = () => {
    setIsOnclick(!isOnclick);
    setIsOnclick1(false);
    setIsOnclick2(false);
    setIsOnclick3(false);
  };

  const handleOnclick1 = () => {
    setIsOnclick1(!isOnclick1);
    setIsOnclick(false);
    setIsOnclick2(false);
    setIsOnclick3(false);
  };

  const handleOnclick2 = () => {
    setIsOnclick2(!isOnclick2);
    setIsOnclick(false);
    setIsOnclick1(false);
    setIsOnclick3(false);
  };

  const handleOnclick3 = () => {
    setIsOnclick3(!isOnclick3);
    setIsOnclick(false);
    setIsOnclick1(false);
    setIsOnclick2(false);
  };

  const handleOnclicknav1 = () => {
    setIsOnclicknav1(!isOnclicknav1);
    setIsOnclicknav2(false);
    setIsOnclicknav3(false);
    setIsOnclicknestednav(false);
  };

  const handleOnclicknav2 = () => {
    setIsOnclicknav2(!isOnclicknav2);
    setIsOnclicknav1(false);
    setIsOnclicknav3(false);
    setIsOnclicknestednav(true);
  };

  const handleOnclicknav3 = () => {
    setIsOnclicknav3(!isOnclicknav3);
    setIsOnclicknav1(false);
    setIsOnclicknav2(false);
    setIsOnclicknestednav(false);
  };

  const handleOnclicknestednav = () => {
    setIsOnclicknestednav(!isOnclicknestednav);
    setIsOnclicknav1(true);
    setIsOnclicknav2(false);
    setIsOnclicknav3(false);
  };

  return (
    <>
      <Container fluid className=" position-absolute pt-5 d-lg-flex d-none">
        <Container
          className="d-flex flex-column justify-content-center"
          style={{ height: "75px" }}
        >
          <Row className="d-flex flex-lg-row flex-column justify-content-center">
            {/* Logo */}
            {/* Row 1 */}
            <Col className="col-lg-4 d-flex flex-column  align-content-center ">
              <Link href="/" className="text-decoration-none">
                <Image src="/FICAC Logo.svg" alt="logo" width={120} />
              </Link>
            </Col>

            {/* Menu */}
            {/* Row 2 */}
            <Col className="d-flex flex-column justify-content-center">
              <div className="d-flex flex-wrap flex-row justify-content-end gap-5 align-content-center align-items-center">
                {/* 1 heading */}
                <div className="gap-5">
                  <div
                    onClick={handleOnclick}
                    className="d-flex flex-row justify-content-center align-items-center gap-1"
                  >
                    <div>
                      <h6 className="mb-0 text-center position-relative text-black">
                        About
                      </h6>
                    </div>
                    <div className="b-0 m-0 text-black">
                      {isOnclick ? (
                        <i class="bi bi-chevron-up b-0 m-0"></i>
                      ) : (
                        <i class="bi bi-chevron-down"></i>
                      )}
                    </div>
                  </div>
                  {isOnclick && (
                    <div
                      className="top mb-0 position-absolute "
                      style={{ backgroundColor: "#001C79" }}
                    >
                      <div className="header">
                        <Link href="/about" className="text-decoration-none">
                          <h6 className="text-white header-text">
                            Who is FICAC
                          </h6>
                        </Link>
                      </div>
                      <div className="header">
                        <Link
                          href="/about/history/"
                          className="text-decoration-none"
                        >
                          <h6 className="text-white header-text">History</h6>
                        </Link>
                      </div>
                      <div className="header">
                        <Link
                          href="/about/mission-vision/"
                          className="text-decoration-none"
                        >
                          <h6 className="text-white header-text">
                            Vision & Mission
                          </h6>
                        </Link>
                      </div>
                      <div className="header">
                        <Link
                          href="/about/executive/"
                          className="text-decoration-none"
                        >
                          <h6 className="text-white header-text">Leadership</h6>
                        </Link>
                      </div>
                    </div>
                  )}
                </div>

                {/* 2 heading */}
                <div>
                  <div
                    onClick={handleOnclick1}
                    className="d-flex flex-row justify-content-center align-items-center gap-1"
                  >
                    <div>
                      <Link href="/news" className="text-decoration-none">
                        <h6 className="mb-0 text-center position-relative text-black">
                          FICAC News
                        </h6>
                      </Link>
                    </div>
                    <div className="b-0 m-0 text-black">
                      {isOnclick1 ? (
                        <i class="bi bi-chevron-up b-0 m-0"></i>
                      ) : (
                        <i class="bi bi-chevron-down"></i>
                      )}
                    </div>
                  </div>
                  {isOnclick1 && (
                    <div className="top mb-0 position-absolute">
                      <div className="header">
                        <Link href="/news" className="text-decoration-none">
                          <h6 className="text-white header-text">FICAC News</h6>
                        </Link>
                      </div>
                      <div className="header">
                        <Link href="/news" className="text-decoration-none">
                          <h6 className="text-white header-text">
                            Newsletters
                          </h6>
                        </Link>
                      </div>
                    </div>
                  )}
                </div>

                {/*  3 heading */}
                <div>
                  <div
                    onClick={handleOnclick2}
                    className="d-flex flex-row justify-content-center align-items-center gap-1"
                  >
                    <div>
                      <Link href="/membership" className="text-decoration-none">
                        <h6 className="mb-0 text-center position-relative text-black">
                          Membership
                        </h6>
                      </Link>
                    </div>
                    <div className="b-0 m-0 text-black">
                      {isOnclick2 ? (
                        <i class="bi bi-chevron-up b-0 m-0"></i>
                      ) : (
                        <i class="bi bi-chevron-down"></i>
                      )}
                    </div>
                  </div>
                  {isOnclick2 && (
                    <div className="top mb-0 position-absolute">
                      <div className="header">
                        <Link
                          href="/membership"
                          className="text-decoration-none"
                        >
                          <h6 className="text-white header-text">
                            Membership Procedure
                          </h6>
                        </Link>
                      </div>
                      <div className="header">
                        <Link
                          href="/membership"
                          className="text-decoration-none"
                        >
                          <h6 className="text-white header-text">
                            Membership Application
                          </h6>
                        </Link>
                      </div>
                    </div>
                  )}
                </div>

                {/* 4 heading */}
                <div>
                  <div className="d-flex flex-row justify-content-center align-items-center gap-3">
                    <div>
                      <Link href="/contact" className="text-decoration-none">
                        <h6 className="mb-0 text-center position-relative text-black">
                          Contact Us
                        </h6>
                      </Link>
                    </div>
                  </div>
                </div>

                {/* menu icon  */}
                <div className="mb-0 p-0 text-white " onClick={toggleMenuClick}>
                  <i class="bi bi-list fs-3"></i>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </Container>

      <Container>
        {isToggleMenu && (
          <>
            <div
              className="position-absolute bg-opacity-25  top-0 end-0 bottom-0 start-0"
              onClick={toggleMenuClick}
            >
              {/* background onclick to close */}
            </div>
            <div
              className="position-absolute top-0 bottom-0 end-0 w-25 h-100 gap-3"
              style={{ backgroundColor: "#001C79" }}
            >
              <p className="text-white fs-4 align-content-right pt-2 d-flex justify-content-end" onClick={toggleMenuClick}>
                <i class="bi bi-x-circle"></i>
              </p>
              {/* Left Side Menu */}

              {/* side nav bar */}

              <div className="">
                <div
                  onClick={handleOnclicknav1}
                  className="d-flex flex-row bg-white align-items-center gap-1 p-3 border-bottom-1 border-black"
                >
                  <Link href="/ficac-committees" className="text-decoration-none">
                  <div>
                    <h6 className="mb-0 text-center position-relative text-black ms-2">
                      Committees
                    </h6>
                  </div>
                  </Link>
                  <div className="b-0 m-0 text-black">
                    {isOnclicknav1 ? (
                      <i class="bi bi-chevron-up b-0 m-0"></i>
                    ) : (
                      <i class="bi bi-chevron-down"></i>
                    )}
                  </div>
                </div>
                {isOnclicknav1 && (
                  <div>
                    <div
                      onClick={handleOnclicknestednav}
                      className=" headerOffcanvas top mb-0 d-flex  header align-items-center"
                    >
                      <div className="ms-4 p-2 pt-3">
                        <h6> List of committees </h6>
                      </div>
                      <div className="b-0 m-0 text-white justify-content-center  align-items-center">
                        {isOnclicknestednav ? (
                          <i class="bi bi-chevron-up b-0 m-0"></i>
                        ) : (
                          <i class="bi bi-chevron-down"></i>
                        )}
                      </div>
                    </div>
                    {isOnclicknestednav && (
                <div className="top  justify-content-center  align-items-center">
                  <div className="headerOffcanvas">
                  <Link href="/ficac-committees/central-committees/" className="text-decoration-none">
                  <div className="header p-2 pt-3">
                    <h6 className="ms-5"> Central Committees </h6>
                  </div>
                  </Link>
                  </div>
                  

                  <div className="headerOffcanvas">
                  <Link href="/ficac-committees/regions-committees" className="text-decoration-none">
                  <div className="header p-2 pt-3">
                  <h6 className="ms-5"> Regions Committees </h6>
                  </div>
                  </Link>
                  </div>
                </div>
                
                
              )}
                    <div
                      // onClick={handleOnclicknav1}
                      className="headerOffcanvas top mb-0 d-flex  header align-items-center p-2"
                    >
                      <div className="ms-4 pt-2">
                        <h6> Their Objective </h6>
                      </div>
                    </div>
                    <div
                      // onClick={handleOnclicknav1}
                      className="headerOffcanvas top mb-0 d-flex  header align-items-center p-2"
                    >
                      <div className="ms-4 pt-2">
                        <h6> Committee Members </h6>
                      </div>
                    </div>
                  </div>
                )}
              
              </div>
              {/* {isOnclicknestednav && (
                <div className="top  justify-content-center  align-items-center">
                  <div className="header">
                    <h6> Central Committees </h6>
                  </div>
                  <div className="header">
                    <h6> Regions Committees </h6>
                  </div>
                </div>
              )} */}

              {/* directory heading */}
              <div className="d-flex flex-row  bg-white align-items-center gap-1 p-3">
              <Link href="/directory" className="text-decoration-none">
                <div>
                  <h6 className="mb-0 text-center position-relative text-black ms-2">
                    Directory
                  </h6>
                </div>
              </Link>
              </div>

              {/* Documents heading */}
                <div
                  onClick={handleOnclicknav2}
                  className="d-flex flex-row bg-white align-items-center gap-1 p-3"
                >
                
                <Link href="/documents" className="text-decoration-none">
                <div>
                    <h6 className="mb-0 text-center position-relative text-black ms-2">
                    Documents
                    </h6>
                  </div>
                  </Link>
                  <div className="b-0 m-0 text-black">
                    {isOnclicknav2 ? (
                      <i class="bi bi-chevron-up b-0 m-0"></i>
                    ) : (
                      <i class="bi bi-chevron-down"></i>
                    )}
                  </div>
                </div>
                {isOnclicknav2 && (
                  <div>
                    <div
                      className=" headerOffcanvas top mb-0 d-flex  header align-items-center"
                    >
                      <div className="p-2 pt-3">
                        <h6 className="ms-4"> FICAC Constitution  </h6>
                      </div>
                     </div>
                     <div
                      className=" headerOffcanvas top mb-0 d-flex  header align-items-center"
                    >
                      <div className="p-2 pt-3">
                        <h6 className="ms-4"> Member Constitution   </h6>
                      </div>
                     </div>
                </div>
                )}

            {/* Event gallery */}

            <div className="d-flex flex-row  bg-white align-items-center gap-1 p-3">
               <Link href="/gallery" className="text-decoration-none">
                <div>
                  <h6 className="mb-0 text-center position-relative text-black ms-2">
                  Event Gallery
                  </h6>
                </div>
                </Link>
              </div>

            </div>
          </>
        )}
      </Container>
    </>
  );
};

export default DesktopHeader;

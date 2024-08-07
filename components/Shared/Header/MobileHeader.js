"use client";
import React, { useState } from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import Link from "next/link";

const MobileHeader = () => {

  const [isToggleMenuMobile, setIsToogleMenuMobile] = useState(false);

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

  const toggleMenuClickMobile = () => {
    setIsToogleMenuMobile(!isToggleMenuMobile);
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
      <Container fluid className="d-flex d-lg-none z-3">
        <Container>
          <Row>
            <Col className="col-lg-4 d-flex flex-column align-content-center py-3 ">
              <Link href="/" className="text-decoration-none">
                <Image src="/FICAC Logo.svg" alt="logo" width={100} />
              </Link>
            </Col>

            <Col className="cursor-pointer d-flex flex-wrap align-content-center justify-content-end">
              <div className="mb-0 p-0 " onClick={toggleMenuClickMobile} >
                <i class="bi bi-list text-white"
                  style={{ fontSize: "50px" }}></i>
              </div>
            </Col>
          </Row>

        </Container>
      </Container>

      {/* Popup Menu */}
      <Container className="position-fixed z-3">
        {isToggleMenuMobile && (
          <>
            <div
              className="position-absolute bg-opacity-25  top-0 end-0 bottom-0 start-0"
              onClick={toggleMenuClickMobile}
            >
              {/* background onclick to close */}
            </div>
            <div
              className="position-fixed top-0 bottom-0 end-0 w-100 h-100 gap-3"
              style={{ backgroundColor: "#001C79" }}
            >
              <p className="text-white fs-2 align-content-right pt-2 p-2 d-flex justify-content-end" onClick={toggleMenuClickMobile}>
                <i class="bi bi-x-circle"></i>
              </p>

              {/* Left Side Menu */}
              <div
                onClick={handleOnclick}
                className="d-flex flex-row  bg-white align-items-center gap-5 p-3"
              >

                <Link href="/about" className="text-decoration-none">
                  <div className="">
                    <h5 className="mb-0 text-center position-relative text-black ms-2">
                      About
                    </h5>
                  </div>
                </Link>
                <div className="b-0 m-0 text-black">
                  {isOnclick ? (
                    <i class="bi bi-chevron-up b-0 m-0"></i>
                  ) : (
                    <i class="bi bi-chevron-down"></i>
                  )}
                </div>
              </div>
              {isOnclick && (
                <div>
                  <Link href="/about" className="text-decoration-none">
                    <div className="p-2 pt-3">
                      <h5 className="ms-4 text-white">Who is FICAC </h5>
                    </div>
                  </Link>
                  <Link href="/about/history/" className="text-decoration-none">
                    <div className="p-2">
                      <h5 className="ms-4 text-white">History</h5>
                    </div>
                  </Link>
                  <Link href="/about/mission-vision/" className="text-decoration-none">
                    <div className="p-2">
                      <h5 className="ms-4 text-white">Misssion & Vission</h5>
                    </div>
                  </Link>
                  <Link href="/about/executive/" className="text-decoration-none">
                    <div className="p-2">
                      <h5 className="ms-4 text-white">Leadership</h5>
                    </div>
                  </Link>

                </div>
              )}

              {/* NEWS heading heading */}
              <div className="d-flex flex-row  bg-white align-items-center gap-1 p-3">
                <Link href="/news" className="text-decoration-none">
                  <div>
                    <h5 className="mb-0 text-center position-relative text-black ms-2"
                      style={{ fontSize: "18px" }}
                    >
                      FICAC News
                    </h5>
                  </div>
                </Link>
              </div>


              {/* Menbership heading heading */}
              <div className="d-flex flex-row  bg-white align-items-center gap-1 p-3">
                <Link href="/membership" className="text-decoration-none">
                  <div>
                    <h5 className="mb-0 text-center position-relative text-black ms-2"
                      style={{ fontSize: "18px" }}
                    >
                      Membership
                    </h5>
                  </div>
                </Link>
              </div>

              {/* Contact us heading */}
              <div className="d-flex flex-row  bg-white align-items-center gap-1 p-3">
                <Link href="/contact" className="text-decoration-none">
                  <div>
                    <h5 className="mb-0 text-center position-relative text-black ms-2"
                      style={{ fontSize: "18px" }}
                    >
                      Contact Us
                    </h5>
                  </div>
                </Link>
              </div>

              {/* <div className="">
                <div
                  onClick={handleOnclicknav1}
                  className="d-flex flex-row bg-white align-items-center gap-1 p-3 border-bottom-1 border-black"
                >
                  <Link href="/ficac-committees" className="text-decoration-none">
                  <div>
                    <h5 className="mb-0 text-center position-relative text-black ms-2"
                      style={{ fontSize: "18px" }}
                    >
                      Committees
                    </h5>
                  </div>
                  </Link> */}
              {/* <div className="b-0 m-0 text-black">
                    {isOnclicknav1 ? (
                      <i class="bi bi-chevron-up b-0 m-0"></i>
                    ) : (
                      <i class="bi bi-chevron-down"></i>
                    )}
                  </div> */}
              {/* </div>
                {isOnclicknav1 && (
                <div>
                  <div
                    onClick={handleOnclicknestednav}
                    className=" headerOffcanvas top mb-0 d-flex  header align-items-center gap-2"
                  >
                    <div className="ms-4 p-0 pt-3">

                      <p style={{ fontSize: "16px" }} > List of committees </p>
                    </div>
                    <div className="pb-0 m-0 text-white justify-content-center  align-items-center">
                      {isOnclicknestednav ? (
                        <i class="bi bi-chevron-up b-0 m-0"></i>
                      ) : (
                        <i class="bi bi-chevron-down"></i>
                      )}
                    </div>
                  </div>
                  {isOnclicknestednav && (
                    <div className="top  justify-content-center  align-items-center">
                      <div className="headerOffcanvas"> */}
              {/* <Link href="/ficac-committees/central-committees/" className="text-decoration-none">
                          <div className="header p-0 pt-3">
                            <p className="ms-5" style={{ fontSize: "14px" }}> Central Committees </p>
                          </div>
                        </Link>
                      </div>


                      <div className="headerOffcanvas">
                        <Link href="/ficac-committees/regions-committees" className="text-decoration-none">
                          <div className="header p-0 pt-3">
                            <p className="ms-5" style={{ fontSize: "14px" }}> Regions Committees </p>
                          </div>
                        </Link>
                      </div>
                    </div>


                  )}
                  <div
                      onClick={handleOnclicknav1}
                      className="headerOffcanvas top mb-0 d-flex  header align-items-center p-2"
                    >
                      <div className="ms-4 pt-2">
                        <h6> Their Objective </h6>
                      </div>
                    </div>
                    <div
                      onClick={handleOnclicknav1}
                      className="headerOffcanvas top mb-0 d-flex  header align-items-center p-2"
                    >
                      <div className="ms-4 pt-2">
                        <h6> Committee Members </h6>
                      </div>
                    </div>
                </div>
                )}

              </div>
              {isOnclicknestednav && (
                <div className="top  justify-content-center  align-items-center">
                  <div className="header">
                    <h6> Central Committees </h6>
                  </div>
                  <div className="header">
                    <h6> Regions Committees </h6>
                  </div>
                </div>
              )} */}


              {/* new commitees heading */}
              <div className="d-flex flex-row  bg-white align-items-center gap-1 p-3">
                <Link href="/ficac-committees" className="text-decoration-none">
                  <div>
                    <h5 className="mb-0 text-center position-relative text-black ms-2"
                      style={{ fontSize: "18px" }}
                    >
                      Committees
                    </h5>
                  </div>
                </Link>
              </div>


              {/* directory heading */}
              <div className="d-flex flex-row  bg-white align-items-center gap-1 p-3">
                <Link href="/directory" className="text-decoration-none">
                  <div>
                    <h5 className="mb-0 text-center position-relative text-black ms-2"
                      style={{ fontSize: "18px" }}
                    >
                      Directory
                    </h5>
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
                    <h5 className="mb-0 text-center position-relative text-black ms-2"
                      style={{ fontSize: "18px" }}
                    >
                      Documents
                    </h5>
                  </div>
                </Link>
                {/* <div className="b-0 m-0 text-black">
                  {isOnclicknav2 ? (
                    <i class="bi bi-chevron-up b-0 m-0"></i>
                  ) : (
                    <i class="bi bi-chevron-down"></i>
                  )}
                </div> */}
              </div>
              {/* {isOnclicknav2 && (
                <div>
                  <div
                    className=" headerOffcanvas top mb-0 d-flex  header align-items-center"
                  >
                    <div className="p-2 pt-3">
                      <h6 className="ms-4"
                        style={{ fontSize: "16px" }}
                      >
                        FICAC Constitution
                      </h6>
                    </div>
                  </div>
                  <div
                    className=" headerOffcanvas top mb-0 d-flex  header align-items-center"
                  >
                    <div className="p-2 pt-3">
                      <h6 className="ms-4"
                        style={{ fontSize: "16px" }}
                      >
                        Member Constitution
                      </h6>
                    </div>
                  </div>
                </div>
              )} */}

              {/* Event gallery */}

              <div className="d-flex flex-row  bg-white align-items-center gap-1 p-3">
                <Link href="/gallery" className="text-decoration-none">
                  <div>
                    <p className="mb-0 text-center position-relative text-black ms-2"
                      style={{ fontSize: "18px" }}
                    >
                      Event Gallery
                    </p>
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

export default MobileHeader;

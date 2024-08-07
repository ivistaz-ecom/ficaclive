import React from 'react';
import { Image } from 'react-bootstrap';

const GalleryPopup = ({ selectedImage, closeSelectedImage, handlePreviousImage, handleNextImage }) => {
    return (
        <div className='position-fixed  top-0 bottom-0 end-0 start-0'>

            <p className='position-absolute end-0 z-3 p-4'>
                <i
                    className="bi bi-x-square-fill text-white fs-3 cursor-pointer"
                    onClick={closeSelectedImage}
                />
            </p>

            <span
                className='position-absolute top-0 bottom-0 end-0 start-0 bg-black bg-opacity-75'
                onClick={closeSelectedImage}
            >
            </span>
            <div className='p-3'>
                <div className='position-absolute top-50 start-50 translate-middle z-3 d-lg-flex d-none'>
                    <div>
                        <Image
                            src={selectedImage.full_image_url}
                            alt=""
                            width="100%"
                            style={{ objectFit: 'cover', objectPosition: 'center center' }}
                        />
                    </div>
                </div>
                <div className='d-flex d-lg-none position-absolute bottom-0  top-0 start-0 end-0 '>
                    <div className='d-flex flex-column justify-content-center'>
                        <Image
                            src={selectedImage.full_image_url}
                            alt=""
                            width="100%"
                            style={{ objectFit: 'cover', objectPosition: 'center center' }}
                        />
                    </div>
                </div>
            </div>

            <div>
                <div className='position-absolute top-50 start-0 d-flex flex-row align-items-center justify-content-center'>
                    <i className="bi bi-arrow-left-circle-fill fs-3 p-2 text-white cursor-pointer align-items-center" onClick={handlePreviousImage}></i>
                    <p className='fs-5 p-2 text-white cursor-pointer align-items-center mb-0 d-lg-flex d-none'>
                        &nbsp; Previous
                    </p>
                </div>
                <div className='position-absolute top-50 end-0 d-flex flex-row align-items-center justify-content-center'>
                    <p className='fs-5 p-2 text-white cursor-pointer align-items-center mb-0 d-lg-flex d-none'>Next &nbsp;
                    </p>
                    <i className="bi bi-arrow-right-circle-fill fs-3 p-2 text-white cursor-pointer" onClick={handleNextImage}></i>
                </div>
            </div>
        </div>
    );
};

export default GalleryPopup;
'use client'
import React, { useEffect, useState, useCallback } from "react";
import { Card, Button, Col, Row, Container } from 'react-bootstrap';
import Link from 'next/link'
import configData from '../.../../../config.json'
import { usePathname } from 'next/navigation'
import debounce from 'lodash.debounce';
import { RotatingLines } from 'react-loader-spinner';
import Image from 'next/image'

const SuccessStories = () => {
    const pathname = usePathname();
    const [movies, setMovies] = useState([]);
    const [page, setPage] = useState(10);
    const [loading, setLoading] = useState(false);
    const [next, setNext] = useState();
    const [total, setTotal] = useState(0);
    const [end, setEnd] = useState(false);

    const fetchContent = useCallback(async () => {
        setLoading(true);

        try {
            const [moviesResponse, categoriesResponse] = await Promise.all([
                fetch(`${configData.SERVER_URL}events_gallery?_embed&categories[]=27&&production[]=${configData.SERVER}&status[]=publish&per_page=${page}`),
                fetch(`${configData.SERVER_URL}categories/27`)
            ]);

            const moviesData = await moviesResponse.json();
            const categoriesData = await categoriesResponse.json();
            console.log(moviesData)

            if (moviesData.length === 0) {
                setEnd(true);
            } else {
                setMovies(moviesData);
                setTotal(categoriesData.count);
            }

            setLoading(false);
        } catch (error) {
            console.error(error);
            setLoading(false);
        }
    }, [page]);
    const debouncedFetchContent = useCallback(debounce(fetchContent, 500), [page]);
    useEffect(() => {
        fetchContent();
        debouncedFetchContent();
    }, [page, debouncedFetchContent]);

    const loadMore = () => {
        if (page >= total) {
            setEnd(true);
            return;
        }

        setPage((oldPage) => oldPage + 4);
    };

    return (
        <>
            <Container>

                {

                    movies.map((item, index) => {
                        //console.log(post);
                        return (
                            <>
                                <div class="card mb-3 rounded-3 btn-border" key={index}>
                                    <div class="row g-0 p-0 p-3">
                                        <div class="col-md-10">
                                            <div class="card-body">
                                                <h5 class="card-title fs-5 fw-500" dangerouslySetInnerHTML={{ __html: item.title.rendered }} />
                                                <p class="card-text fs-6 fw-300" >{item.acf.date}</p>
                                            </div>
                                        </div>
                                        <div class="col-md-2 justify-content-center align-self-center text-center">
                                            <Link
                                                href={`/event-archive/${item.slug}`}
                                                className='btn btn-primary border-0 px-3 py-2 fs-5 fw-300'
                                                style={{ backgroundColor: '#001CAA' }}
                                            >
                                                View Photos
                                            </Link>
                                            {/* <Link href="" className='btn btn-primary border-0 px-3 py-2 fs-5 fw-300' style={{ backgroundColor: '#001CAA' }}>View Photos</Link> */}
                                        </div>
                                    </div>
                                </div>

                            </>
                        )


                    })}

            </Container>

            <section className="section text-center mb-3 pb-5 wbg-light-gy" fluid>
                {loading ? (
                    <RotatingLines
                        visible={true}
                        height="30"
                        width="30"
                        color="#fff"
                        strokeWidth="5"
                        animationDuration="0.75"
                        ariaLabel="rotating-lines-loading"
                        wrapperStyle={{}}
                        strokeColor="green"
                        wrapperClass="" />

                ) : (
                    <div className="loadmodediv">
                        {end ? (<p>No more events to load</p>) : (<Button variant="primary" className='btn btn-primary border-0 px-3 py-2 fs-5 fw-300'
                            style={{ backgroundColor: '#001CAA' }} onClick={loadMore}  >Load More</Button>
                        )}</div>
                )}
            </section>
        </>
    );
};

export default SuccessStories;
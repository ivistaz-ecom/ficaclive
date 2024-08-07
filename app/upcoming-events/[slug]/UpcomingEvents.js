'use client'
import React, { useState, useEffect } from 'react'
import { Container } from 'react-bootstrap';

const UpcomingEvents = () => {
    const [isData, setIsData] = useState([]);

    const fetchData = async () => {
        try {
            // let result = await fetch(`https://ficac.ivistaz.co/wp-json/wp/v2/directors?_embed&per_page=100`);
            let result = await fetch(
                "https://beta.ficacworld.org/wp-json/wp/v2/posts?categories=14&_embed"
            );
            result = await result.json();
            setIsData(result);
            console.log(result);
        } catch {
            // console.log("Error fetching data");
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <>
            <Container>
                {isData.map((post) => (
                    <div
                        key={post.id}
                    >
                        <p
                            // {post.content.rendered}
                            dangerouslySetInnerHTML={{ __html: post.content.rendered }} >
                        </p>
                    </div>
                ))}
            </Container>
        </>
    )
}

export default UpcomingEvents
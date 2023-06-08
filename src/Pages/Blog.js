import React, { Component, useState } from 'react';
import { Container, Col, Row, Card, ListGroup } from "react-bootstrap";
import StarRatings from 'react-star-ratings';

export default function Blog() {
    const posts = [
        {
            id: 1,
            title: "Blog post 1",
            url: "/blog1",
            imgUrl: "https://st2.depositphotos.com/3261171/7891/i/450/depositphotos_78914256-stock-photo-man-drinking-tea-and-eading.jpg",
            content: "Lorem ipsum.",
            date: new Date("2021-07-15T16:30:00.000Z")
        },
        {
            id: 2,
            title: "Blog post 2",
            url: "/blog2",
            imgUrl: "https://st3.depositphotos.com/3591429/18863/i/1600/depositphotos_188634212-stock-photo-man-reading-newspaper-fake-news.jpg",
            content: "Lorem ipsum.",
            date: new Date("2023-01-15T16:30:00.000Z")
        },
        {
            id: 3,
            title: "Blog post 3",
            url: "/blog3",
            imgUrl: "https://c8.alamy.com/comp/BE4PYY/older-man-reading-newspaper-with-angry-expression-BE4PYY.jpg",
            content: "Lorem ipsum.",
            date: new Date("2020-01-15T16:30:00.000Z")
        },
        {
            id: 4,
            title: "Blog post 4",
            url: "/blog3",
            imgUrl: "https://c8.alamy.com/comp/BE4PYY/older-man-reading-newspaper-with-angry-expression-BE4PYY.jpg",
            content: "Lorem ipsum.",
            date: new Date("2020-01-15T16:30:00.000Z")
        },
        {
            id: 5,
            title: "Blog post 5",
            url: "/blog3",
            imgUrl: "https://c8.alamy.com/comp/BE4PYY/older-man-reading-newspaper-with-angry-expression-BE4PYY.jpg",
            content: "Lorem ipsum.",
            date: new Date("2020-01-15T16:30:00.000Z")
        }
    ];

    const postsPerPage = 2;
    const [sortedPosts, setSortedPosts] = useState(posts);
    const [currentPage, setCurrentPage] = useState(1);
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = sortedPosts.slice(indexOfFirstPost, indexOfLastPost);
    const totalPages = Math.ceil(posts.length / postsPerPage);

    const [ratings, setRatings] = useState({});

    const handlePageClick = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    const sortAscending = () => {
        const sorted = [...sortedPosts].sort((a, b) => a.date - b.date);
        setSortedPosts(sorted);
    };

    const sortDescending = () => {
        const sorted = [...sortedPosts].sort((a, b) => b.date - a.date);
        setSortedPosts(sorted);
    };

    const handleRatingChange = (newRating, postId) => {
        setRatings((prevRatings) => ({
            ...prevRatings,
            [postId]: newRating,
        }));
    };


    return (
        <Row>
            <Col md="9">
                <div>
                    <button onClick={sortAscending}>Дата ↑</button>
                    <button onClick={sortDescending}>Дата ↓</button>
                </div>
                {currentPosts.map((post) => (
                    <div className="d-flex align-items-center me-5">
                        <div className="flex-shrink-0">
                            <img
                                width={200}
                                height={150}
                                className="mr-3"
                                src={post.imgUrl}
                                alt="photo" />
                        </div>
                        <StarRatings
                            rating={ratings[post.id] || 0}
                            starRatedColor="gold"
                            starEmptyColor="lightgray"
                            changeRating={(newRating) => handleRatingChange(newRating, post.id)}
                            numberOfStars={5}
                            name={`rating-${post.id}`}
                        />
                        <div className="flex-grow-1 ms-3">
                            <h5><a href={post.url}>{post.title}</a></h5>
                            <p>
                                {post.content}
                            </p>
                        </div>
                    </div>
                ))}
                <div>
                    {Array.from({ length: totalPages }, (_, index) => index + 1).map(
                        (pageNumber) => (
                            <button
                                key={pageNumber}
                                onClick={() => handlePageClick(pageNumber)}
                                disabled={currentPage === pageNumber}
                            >
                                {pageNumber}
                            </button>
                        )
                    )}
                </div>
            </Col>
            <Col md="3">
                <h5 className="text-center mt-5">Категорії</h5>

                <Card>
                    <ListGroup variant="flush">
                        <ListGroup.Item>категорія 1</ListGroup.Item>
                        <ListGroup.Item>категорія 2</ListGroup.Item>
                        <ListGroup.Item>категорія 3</ListGroup.Item>
                        <ListGroup.Item>категорія 4</ListGroup.Item>
                        <ListGroup.Item>категорія 5</ListGroup.Item>
                    </ListGroup>
                </Card>
                <Card className="mt-3 bg-light">
                    <Card.Body>
                        <Card.Title>Slide widget</Card.Title>
                        <Card.Text>
                            Lorem
                        </Card.Text>
                    </Card.Body>
                </Card>

            </Col>

        </Row>

    );
}

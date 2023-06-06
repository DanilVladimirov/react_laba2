import React, {Component} from 'react';
import Img1 from './assets/img1.jpg';
import Img2 from './assets/img2.jpg';
import Img3 from './assets/img3.jpg';
import {Carousel} from "react-bootstrap";

class CarouselBoxHk extends Component {
    render() {
        return (
            <Carousel>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={Img1}
                    alt="Drink kofe"/>
                    <Carousel.Caption>
                        <h3>Drink kofe</h3>
                        <p>Lorem ipsum drink kofe</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={Img2}
                        alt="Eating Kartoshka"/>
                    <Carousel.Caption>
                        <h3>Eating Kartoshka</h3>
                        <p>Lorem ipsum Eating Kartoshka</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={Img3}
                        alt="Eating Burger i Kartoshka"/>
                    <Carousel.Caption>
                        <h3>Eating Burger i Kartoshka</h3>
                        <p>Lorem ipsum Eating Burger i Kartoshka.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        );
    }
}

export default CarouselBoxHk;

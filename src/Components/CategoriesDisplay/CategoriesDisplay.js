import React from "react";
// import { Link } from "react-router-dom";
import useFetch from "../UseFetch";
import Carousel from 'react-bootstrap/Carousel';
import { CardColumns } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import Style from './Carousel.module.css';



export default function CategoriesDisplay({ category }) {

    const data = useFetch(category)

    return (

        <div>
            <div className="container">

                <Carousel>
                    {data.map((el, index) => (

                        <Carousel.Item key={index}>
                            <CardColumns>
                                <Card key={el.imdbID} className="card" style={{ width: '25rem', margin: '5px', height: '30rem', padding: '15px', backgroundPosition: 'center' }}>

                                    <Card.Img variant="top" className={`d-block w-100.card-img-top ${Style.cardImage}`} src={el.Poster} />

                                    <Card.Body className="cardTitle">
                                        <Card.Title>{el.Title}</Card.Title>
                                        <Card.Link to="/about/" href="/about/">Rent a Movie</Card.Link>
                                        <Card.Link to="/moviedetail/" href="/moviedetail">See movie Plot</Card.Link>
                                    </Card.Body>
                                </Card>
                            </CardColumns>
                        </Carousel.Item>

                    ))}
                </Carousel>

            </div>
        </div >
    );
}
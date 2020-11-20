import React from "react";
// import { Link } from "react-router-dom";
import useFetch from "../UseFetch";
import Carousel from 'react-bootstrap/Carousel';
import { CardColumns } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import Style from './custom.module.css';
import "../../Style/custom.css";




export default function CategoriesDisplay({ category }) {

    const data = useFetch(category)

    return (

        <div>
            <div className="container">

                <Carousel>
                    {data.map((el, index) => (

                        <Carousel.Item key={index}>
                            <CardColumns>
                                <Card key={el.imdbID} className="card" style={{ width: 'inherit', margin: '5px', padding: '15px', backgroundSize: 'cover' }}>

                                    <Card.Img variant="top" className={`d-block w-100.card-img-top ${Style.cardImageCarousel}`} src={el.Poster} />

                                    <Card.Body className="cardTitle">
                                        <Card.Title>{el.Title}</Card.Title>
                                        <Card.Link to="/about/" href="/about/">Rent a Movie</Card.Link>
                                        <Card.Link to={`/moviedetail/${el.imdbID}`} href={`/moviedetail/${el.imdbID}`}> See movie Plot</Card.Link>
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
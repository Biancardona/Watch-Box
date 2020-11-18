import React from "react";
// import { Link } from "react-router-dom";
import useFetch from "../UseFetch";
import Carousel from 'react-bootstrap/Carousel';
import CardGroup from 'react-bootstrap/CardGroup';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import Style from './Carousel.module.css';


export default function CategoriesDisplay({ category }) {

    const data = useFetch(category)

    return (

        <div>
            <div className="container">
                <div className="row">
                    {data.map((el, index) => (
                        <section key={index}>
                            <Carousel>
                                <Carousel.Item>
                                    <CardGroup>
                                        <Card key={el.imdbID} class="card" style={{ width: '18rem', margin: '5px', height: '30rem', padding: '15px', }}>

                                            <Card.Img variant="top" className={`d-block w-100.card-img-top ${Style.cardImage}`} src={el.Poster} />
                                            <Card.Body class="cardTitle">
                                                <Card.Title>{el.Title}</Card.Title>
                                                <Card.Link href="#">Rent a Movie</Card.Link>
                                                <Card.Link href="#">See movie Plot</Card.Link>
                                            </Card.Body>
                                        </Card>
                                    </CardGroup>
                                </Carousel.Item>
                            </Carousel>



                            {/* <section key={index}>
                    <Link key={el.imdbID}>
                        <img src={el.Poster} alt="" />  </Link>
                </section>  */}
                        </section>

                    ))}
                </div>
            </div>
        </div >
    );
}
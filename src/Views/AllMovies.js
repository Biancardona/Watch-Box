import React from 'react';
import useFetch from '../Components/UseFetch';
import NavBar from '../Components/Navbar';

import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import Style from '../Components/CategoriesDisplay/Carousel.module.css';
import { CardColumns } from 'react-bootstrap';


export default function DataLoader({ match }) {
    const data = useFetch(match.params.id);
    return (
        <div className="columns is-multiline">

            <div className="column"></div>
            <header>
                <NavBar> </NavBar>
            </header>
            <div>

                {data.map((el, index) => (
                    <section key={index}>

                        <CardColumns>
                            <Card key={el.imdbID} className="card" style={{ width: '25rem', margin: '5px', height: '30rem', padding: '15px', }}>

                                <Card.Img variant="top" className={`d-block w-100.card-img-top ${Style.cardImage}`} src={el.Poster} />
                                <Card.Body className="cardTitle">
                                    <Card.Title>{el.Title}</Card.Title>
                                    <Card.Link to="/about/" href="/about/">Rent a Movie</Card.Link>
                                    <Card.Link href="#">See movie Plot</Card.Link>
                                </Card.Body>
                            </Card>
                        </CardColumns>
                    </section>

                ))}

            </div>
        </div >
    );
}


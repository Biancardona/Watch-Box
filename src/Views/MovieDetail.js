import React from 'react';
import { PlotDetail } from '../Components/UseFetch';
import NavBar from '../Components/Navbar';
import Card from 'react-bootstrap/Card';

export default function MovieDetail({ match }) {
        const item = PlotDetail(match.params.id);
        return (
                <>

                        <div className="columns is-multiline">

                                <div className="column"></div>
                                <header>
                                        <NavBar> </NavBar>
                                </header>

                                <div>
                                        <Card style={{ width: '18rem' }}>
                                                <Card.Body>
                                                        <Card.Title>

                                                                Title:
        {' '}
                                                                {item.Title}
                                                                {' '}
                                                        </Card.Title>
                                                        <Card.Title>

                                                                Runtime:
        {' '}
                                                                {item.Runtime}
                                                                <br />
        Genre:
        {' '}
                                                                {item.Genre}
                                                                <br />
        Director:
        {' '}
                                                                {item.Director}
                                                                <br />
        Actors:
        {' '}
                                                                {item.Actors}
                                                                <br />
        Plot:
        {' '}
                                                                {item.Plot}

                                                        </Card.Title>

                                                        <Card.Link to="/about/" href="/about/">Rent a Movie</Card.Link>

                                                </Card.Body>
                                        </Card>



                                </div>
                        </div>

                </>
        );
}
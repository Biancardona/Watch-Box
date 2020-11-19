import React from 'react';
import { PlotDetail } from '../Components/UseFetch';
import NavBar from '../Components/Navbar';

export default function MovieDetail({ imdbID }) {
        const item = PlotDetail(imdbID);
        return (
                <>
                        <div className="columns is-multiline">

                                <div className="column"></div>
                                <header>
                                        <NavBar> </NavBar>
                                </header>

                                <div>
                                        <h1>
                                                Title:
        {' '}
                                                {item.Title}
                                                {' '}
                                                <br />
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
                                                <br />
                                        </h1>
                                </div>
                        </div>

                </>
        );
}
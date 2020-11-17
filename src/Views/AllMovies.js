import React from 'react';
import { Link } from 'react-router-dom';
import useFetch from '../Components/UseFetch';

export default function DataLoader({ match }) {
    const data = useFetch(match.params.id);
    return (
        <div>
            <ul>
                {data.map(el => (

                    // eslint-disable-next-line react/jsx-key
                    <li>
                        <Link key={el.imdbID} to={`/moviedetail/${el.imdbID}`}>
                            <img src={el.Poster} alt="" /> <li>
                                {el.Title} </li> </Link>
                    </li>))}
            </ul>
        </div>
    );
}

import React from 'react';
import { Link } from 'react-router-dom';

const Saga = ({ title, wordKey, to }) => {
    return (
        <Link key={wordKey} to={to}>
            <div className='column' >
                <figure >
                    <img alt={title} className="buttonImage" />
                </figure>
                <p className='titleSaga'>{title}</p>
            </div>
        </Link>

    )
}
export default Saga
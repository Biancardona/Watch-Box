import React from 'react';
import { Link } from 'react-router-dom';

// import '../Styles/Home.css';
import NavBar from '../Components/Navbar';

const Home = () => (

    <div className="columns is-multiline">

        <div className="column"></div>
        <header>
            <NavBar> </NavBar>
        </header>

        <Link key="avengers" to={`/allmovies/avengers`}>Avengers</Link><br>
        </br>
        <Link key="star" to={`/allmovies/star`}>Star Wars</Link><br>
        </br>
        <Link key="harry" to={`/allmovies/harry`}>Harry Potter</Link><br>
        </br>
        <Link key="disney" to={`/allmovies/disney`}>Disney</Link><br>
        </br>
        <Link key="lord" to={`/allmovies/lord`}>Lord Of The Rings</Link><br>
        </br>
    </div >
);

export default Home;
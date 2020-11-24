import React from 'react';
// import { Link } from 'react-router-dom';
import CategoriesDisplay from "../Components/CategoriesDisplay/CategoriesDisplay";
// import '../Styles/Home.css';
import NavBar from '../Components/Navbar';

import Dashboard from '../Components/SignUp.In/Login';


const Home = () => (

    <div className="columns is-multiline">

        <div className="column"></div>
        <header>
            <NavBar> </NavBar>
        </header>

        <div>
            <Dashboard> </Dashboard>
        </div>

        <CategoriesDisplay category={"star"} worKey="star" />
        <CategoriesDisplay category={"harry"} worKey="harry" />
        <CategoriesDisplay category={"batman"} workey="batman" />


    </div >
);

export default Home;
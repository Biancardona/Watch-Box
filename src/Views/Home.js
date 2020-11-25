import React from 'react';
// import { Link } from 'react-router-dom';
import CategoriesDisplay from "../Components/CategoriesDisplay/CategoriesDisplay";
// import '../Styles/Home.css';
import NavBar from '../Components/Navbar';

import { useUser } from 'reactfire';
import Logout from './Logout';




const Home = () => {
    const user = useUser();
    return (

        <div className="columns is-multiline">

            <div className="column"></div>


            <header>
                <NavBar> </NavBar>

                <div>
                    {
                        user &&
                        <Logout />
                    }
                    {
                        !user &&
                        <>

                            <div> Hola crayola este es Home </div>
                        </>
                    }
                </div>
            </header>

            <CategoriesDisplay category={"star"} worKey="star" />
            <CategoriesDisplay category={"harry"} worKey="harry" />
            <CategoriesDisplay category={"batman"} workey="batman" />


        </div >
    );
}

export default Home;
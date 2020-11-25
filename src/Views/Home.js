import React from 'react';
// import { Link } from 'react-router-dom';
import CategoriesDisplay from "../Components/CategoriesDisplay/CategoriesDisplay";
// import '../Styles/Home.css';
import NavBar from '../Components/Navbar';

import { useUser } from 'reactfire';





const Home = () => {
    const user = useUser();
    return (
        <div>
            {
                user &&
                <div className="columns is-multiline">
                    <div className="column"></div>

                    <header>
                        <NavBar> </NavBar>
                    </header>

                    <div>
                        Welcome {user.displayName}
                    </div>

                    <CategoriesDisplay category={"star"} worKey="star" />
                    <CategoriesDisplay category={"harry"} worKey="harry" />
                    <CategoriesDisplay category={"batman"} workey="batman" />


                </div >
            }

        </div>
    );
}

export default Home;
import React from "react";
import { Link } from "react-router-dom";
import useFetch from "./UseFetch";


export default function CategoriesDisplay({ category }) {

    const data = useFetch(category)

    return (
        <div>
            <div className="container">
                <div className="row">
                    {data.map((el, index) => (

                        <section key={index}>
                            <Link key={el.imdbID}>
                                <img src={el.Poster} alt="" /> <li>
                                    {el.Title} </li> </Link>
                        </section>


                    ))}
                </div>
            </div>
        </div >
    );
}
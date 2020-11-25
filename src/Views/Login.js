import React, { useState } from 'react';
import { useFirebaseApp } from 'reactfire';
import 'firebase/auth'


const Login = () => {
    // User State
    const [user, setUser] = useState({
        email: '',
        password: '',
        error: '',
    });

    // onChange function
    const handleChange = e => {
        setUser({
            ...user,
            [e.target.name]: e.target.value,
            error: '',
        })
    };

    // Import firebase
    const firebase = useFirebaseApp();

    // Submit function (Log in user)
    const handleSubmit = e => {
        e.preventDefault();
        // Log in code here.
        firebase.auth().signInWithEmailAndPassword(user.email, user.password)
            .then(result => {
                if (!result.user.emailVerified) {
                    setUser({
                        ...user,
                        error: 'Please verify your email before to continue',
                    })
                    firebase.auth().signOut();
                }
            })
            .catch(error => {
                // Update the error
                setUser({
                    ...user,
                    error: error.message,
                })
            })
    }

    return (
        <>
            <div className="container-fluid">
                <div className="row main-content bg-success text-center">
                    <div className="col-md-4 text-center company__info">
                        <span className="company__logo"><h2><span className="fa fa-android"></span></h2></span>
                        <h2 className="company_title">Watch Box</h2>
                    </div>
                    <div className="col-md-8 col-xs-12 col-sm-12 login_form ">
                        <div className="container-fluid">
                            <div className="row">
                                <h2>Log In</h2>
                            </div>
                            <div className="row">
                                <form className="form-group" onSubmit={handleSubmit}>

                                    <div className="row">

                                        <input type="text" className="form__input" placeholder="Email" id="email" name="email" onChange={handleChange} />
                                    </div>
                                    <div className="row">

                                        <input type="password" id="password" className="form__input" placeholder="Password" name="password" onChange={handleChange} />
                                    </div>
                                    <div className="row">
                                        <input type="checkbox" name="remember_me" id="remember_me" className="" />
                                        <label htmlFor="remember_me">Remember Me!</label>
                                    </div>
                                    <div className="row">
                                        <button type="submit" className="btn">Log in</button>
                                    </div>
                                </form>
                            </div>
                            <div className="row">
                                <p>Dont have an account? <a href="/register/">Register Here</a></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {user.error && <h4>{user.error}</h4>}
        </>
    )
};
export default Login;
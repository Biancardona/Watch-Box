import React, { useState } from 'react';
import { useFirebaseApp } from 'reactfire';
import 'firebase/auth'



const Register = () => {


    // User State
    const [user, setUser] = useState({
        nickname: '',
        email: '',
        password: '',
        error: '',
        verifyEmail: '',
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


    // Submit function (Create account)
    const handleSubmit = e => {
        e.preventDefault();
        // Sign up code here.
        firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
            .then(result => {
                // Update the nickname
                result.user.updateProfile({
                    displayName: user.nickname,
                });

                // URL of my website.
                const myURL = { url: 'http://localhost:3000/' }

                // Send Email Verification and redirect to my website.
                result.user.sendEmailVerification(myURL)
                    .then(() => {
                        setUser({
                            ...user,
                            verifyEmail: `Welcome ${user.nickname}. To continue please verify your email.`,
                        })
                    })
                    .catch(error => {
                        setUser({
                            ...user,
                            error: error.message,
                        })
                    })

                // Sign Out the user.
                firebase.auth().signOut();
            }).catch(error => {
                // Update the error
                setUser({
                    ...user,
                    error: error.message,
                })
            })
    }

    return (
        <>
            <div>


                <div className="container-fluid">
                    <div className="row main-content bg-success text-center">
                        <div className="col-md-4 text-center company_info">
                        </div>
                        <div className="col-md-8 col-xs-12 col-sm-12 login_form ">
                            <div className="container-fluid">
                                <div className="row">
                                    <h1>Sign up</h1>
                                </div>
                                <div className="row">
                                    <form className="form-group" onSubmit={handleSubmit}>
                                        <div className="row">

                                            <input type="text" className="form__input" placeholder="Name" name="nickname" onChange={handleChange} />
                                        </div>
                                        <div className="row">

                                            <input type="text" className="form__input" placeholder="Email" name="email" onChange={handleChange} />
                                        </div>
                                        <div className="row">

                                            <input type="password" className="form__input" placeholder="Password" name="password" onChange={handleChange} />
                                        </div>
                                        <div className="row">
                                            <button type="submit" className="btnSignUp btn">Sign Up</button>
                                        </div>
                                    </form>
                                    <div className="row">
                                        <p> Already registered <a href="/">sign in?</a>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
            {user.error && <h4>{user.error}</h4>}
            {user.verifyEmail && <h4>{user.verifyEmail}</h4>}
        </>
    )
};
export default Register;
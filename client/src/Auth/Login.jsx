import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { useAuthContext } from './AuthContext';
import { ButtonLoader } from '../Utils/Loader';

const validationSchema = Yup.object().shape({
    email: Yup.string()
        .email('Invalid email format')
        .required('Email is required'),
    password: Yup.string()
        .min(6, 'Password must be at least 6 characters')
        .required('Password is required'),
});

const Login = () => {
    const [error, setError] = useState();
    const navigate = useNavigate();
    const [passwordVisibility, setPasswordVisibility] = useState(false);
    const { isAuthenticated, setIsAuthenticated } = useAuthContext();
    useEffect(() => {
        if (isAuthenticated) {
            navigate("/admin");
        }
    }, [isAuthenticated, navigate]);



    const handleSubmit = async (values) => {
        try {
            let response = await axios.post(`${import.meta.env.VITE_API_URL}auth/login`, values);
            console.log(response);
            if (response?.data?.status) {
                setIsAuthenticated(true);
            } else {
                setError(response?.data?.message);
            }
        } catch (error) {
            console.log(error.message);
        }
    };

    return (
        <section className="login-form uni-padding">
            <div className="container">
                <div className='text-center my-4'>
                    <h1><Link to={'/'}>{import.meta.env.VITE_SITE_TITLE}</Link></h1>
                    <p className="m-0 text-danger">{error && error}</p>
                </div>
                <Formik
                    initialValues={{ email: '', password: '' }}
                    validationSchema={validationSchema}
                    onSubmit={handleSubmit}
                >
                    {({ isSubmitting }) => (
                        <Form className="form">


                            <div className="form-item">
                                <label className="form-label">Email</label>
                                <Field
                                    name="email"
                                    type="text"
                                    className="form-control"
                                    autoComplete="off"
                                />
                                <ErrorMessage name="email" component="div" className="text-danger" />
                            </div>
                            <div className="form-item">
                                <label className="form-label">Password</label>
                                <div>
                                    <div className="position-relative">
                                        <Field
                                            name="password"
                                            type={passwordVisibility ? "text" : "password"}
                                            className="form-control"
                                            autoComplete="off"
                                        />
                                        <i
                                            role='button'
                                            onClick={() => setPasswordVisibility(!passwordVisibility)}
                                            className={`fa-regular fa-eye${!passwordVisibility ? "-slash" : ""} position-absolute end-0 top-50 translate-middle`}
                                        />
                                    </div>
                                    <ErrorMessage name="password" component="div" className="text-danger" />
                                </div>
                            </div>

                            <div className="form-signin mb-3">
                                <button type="submit" className="btn btn-primary position-relative" disabled={isSubmitting}>
                                    {
                                        isSubmitting ? (<>
                                            Login... <ButtonLoader />
                                        </>) : (<>
                                            Login
                                        </>)
                                    }
                                </button>
                            </div>
                        </Form>
                    )}
                </Formik>
            </div>
        </section>
    );
};

export default Login;

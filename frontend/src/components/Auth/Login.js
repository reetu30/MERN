import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useMutation, gql } from '@apollo/client';
import { useAuth } from '../context/AuthContext';
import useCheckLogin from '../common/customHook/useCheckLogin';

const loginMutation = gql`
    mutation LoginUSer($email: String!, $password: String!) {
        loginUSer(email: $email, password: $password) {
            user {
                email
                role
            }
            token
        }
    }
`;

const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const { login, isAuthenticated, userRole } = useAuth();
    const [loginUser, { loading, error }] = useMutation(loginMutation);

    useCheckLogin({isAuthenticated, userRole})

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!email || !password) {
            setErrorMessage('Please fill all the fields');
        } else {
            try {
                const response = await loginUser({
                    variables: { email, password },
                });

                if (response.data?.loginUSer) {
                    const { user, token } = response.data.loginUSer;
                    console.log(user, "===>user");
                    
                    setErrorMessage('');
                    setEmail('');
                    setPassword('');
                    login({ token, role: user.role });
                    // localStorage.setItem("token", token)
                    // localStorage.setItem("role", user.role)

                    // Navigate based on user role
                    if (user.role === 'admin') {
                        navigate('/dashboard');
                    } else {
                        // console.log("profie===>", user.role);
                        // window.location.href = '/profile';
                        navigate('/profile');
                    }
                } else {
                    setErrorMessage('Login failed');
                }
            } catch (error) {
                console.error('Error logging in:', error);
                setErrorMessage('Login failed. Please try again.');
            }
        }
    };

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error occurred: {error.message}</div>;

    return (
        <section className="bg-gray-50 dark:bg-gray-900">
            <div className="flex flex-col items-center justify-center px-6 mx-auto md:h-screen lg:py-0">
                <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        {errorMessage && <div className="text-red-700">{errorMessage}</div>}

                        <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                            Sign in to your account
                        </h1>
                        <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
                            <div>
                                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    className="login-input"
                                    placeholder="name@company.com"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>
                            <div>
                                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                                <input
                                    type="password"
                                    name="password"
                                    id="password"
                                    placeholder="••••••••"
                                    className="login-input"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </div>
                            <div className="flex items-center justify-between"></div>
                            <button
                                type="submit"
                                className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                            >
                                Sign in
                            </button>
                            <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                                Don't have an account yet?{' '}
                                <Link className="font-medium text-primary-600 hover:underline dark:text-primary-500">Sign up</Link>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Login;

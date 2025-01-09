import React from 'react'
import { Link } from 'react-router-dom'

const SignUp = () => {
    const handleClick = ()=>{
        console.log("clicked");
    }
    return (
        <section  className="bg-gray-50 dark:bg-gray-900">
            <div  className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                <div  className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                    <div  className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1  className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                            Create an account
                        </h1>
                        <form  className="space-y-4 md:space-y-6">
                            <div>
                                <label for="email"  className="sign-input">Your email</label>
                                <input type="email" name="email" id="email"  className="login-input" placeholder="name@company.com" required="" />
                            </div>
                            <div>
                                <label for="password"  className="sign-input">Password</label>
                                <input type="password" name="password" id="password" placeholder="••••••••"  className="login-input" required="" />
                            </div>
                            <div>
                                <label for="confirm-password"  className="sign-input">Confirm password</label>
                                <input type="confirm-password" name="confirm-password" id="confirm-password" placeholder="••••••••"  className="login-input" required="" />
                            </div>
                            <div  className="flex items-start">
                                <div  className="flex items-center h-5">
                                    <input id="terms" aria-describedby="terms" type="checkbox"  className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required="" />
                                </div>
                                <div  className="ml-3 text-sm">
                                    <label for="terms"  className="font-light text-gray-500 dark:text-gray-300">I accept the <span  className="font-medium text-primary-600 hover:underline dark:text-primary-500">Terms and Conditions</span></label>
                                </div>
                            </div>
                            <button type="submit"  className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800" onClick={handleClick}>Create an account</button>
                            <p  className="text-sm font-light text-gray-500 dark:text-gray-400">
                                Already have an account? <Link to="/login"  className="font-medium text-primary-600 hover:underline dark:text-primary-500">Login here</Link>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SignUp
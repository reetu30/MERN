import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Message from '../Message/Message';
import { gql, useMutation } from '@apollo/client';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for redirection
import { useAuth } from '../context/AuthContext';
import useCheckLogin from '../common/customHook/useCheckLogin';

// GraphQL mutation
const signupMutation = gql`
mutation CreateUser($name: String!, $email: String!, $password: String!) {
  createUser(name: $name, email: $email, password: $password) {
    user {
      name
      email
      password
    }
    token
  }
}
`;

const SignUp = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [errorMsg, setErrorMsg] = useState('')
    const [acceptTerms, setAcceptTerms] = useState(false)
    const [createUser, { loading, error, data }] = useMutation(signupMutation);
    const navigate = useNavigate()
    const {login, isAuthenticated, userRole} = useAuth()

    useCheckLogin({isAuthenticated, userRole})

    const handleClick = async(e)=>{
        e.preventDefault()
        
        if(!name || !email || !password || !confirmPassword || !acceptTerms){
            setErrorMsg("All fields are required")
        }else if(password !== confirmPassword){
            setErrorMsg("Password do not match")
        } else {
            console.log("All fields are filled");
            try {
                const response = await createUser({
                  variables: { name, email, password },
                });

                if (response.data.createUser) {
                    const { user, token } = response.data.createUser;
                    setName('');
                    setEmail('');
                    setPassword('');
                    setConfirmPassword('');
                    setAcceptTerms(false);
                    login({token, role:user.role})
                    if (user.role === "admin") {
                        navigate('/dashboard');
                    } else {
                        navigate('/profile')
                    }
                } else {
                    setErrorMsg("Error signup failed")
                }
                
              } catch (err) {
                console.error('Error creating user:', err);
            }
        }
    }

    if(loading) return (<div>Loading...</div>)
    if (error) return <div>Error occurred: {error.message}</div>;

    return (
        <section className="bg-gray-50 dark:bg-gray-900">
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                {errorMsg && (<Message prop={{type:"error", message:errorMsg}} />)}
                {data && ( <Message prop={{type:"success", message:`Signed up successfully! Welcome, ${data.createUser.user.name}.`}} />)}

                <div  className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                    <div  className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1  className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                            Create an account
                        </h1>
                        <form className="space-y-4 md:space-y-6">
                            <div>
                                <label className="sign-input">Your Name</label>
                                <input type="text" name="text" value={name}  className="login-input" placeholder="name" onChange={(e)=> setName(e.target.value)} />
                            </div>
                            <div>
                                <label className="sign-input">Your email</label>
                                <input type="email" name="email" value={email}  className="login-input" placeholder="name@company.com" onChange={(e)=> setEmail(e.target.value)} />
                            </div>
                            <div>
                                <label className="sign-input">Password</label>
                                <input type="password" name="password" value={password} placeholder="••••••••"  className="login-input" onChange={(e)=> setPassword(e.target.value)} />
                            </div>
                            <div>
                                <label className="sign-input">Confirm password</label>
                                <input type="confirm-password" name="confirm-password" value={confirmPassword} placeholder="••••••••"  className="login-input" onChange={(e)=> setConfirmPassword(e.target.value)} />
                            </div>
                            <div  className="flex items-start">
                                <div  className="flex items-center h-5">
                                <input aria-describedby="terms" type="checkbox" className="sign-checkbox" onChange={(e)=>setAcceptTerms(e.target.checked)}  />
                                </div>
                                <div  className="ml-3 text-sm">
                                    <label className="font-light text-gray-500 dark:text-gray-300">I accept the <span  className="font-medium text-primary-600 hover:underline dark:text-primary-500">Terms and Conditions</span></label>
                                </div>
                            </div>
                            <button type="submit"  className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800" onClick={handleClick}>Create an account</button>
                            <p className="text-sm font-light text-gray-500 dark:text-gray-400">
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
import { gql, useMutation } from "@apollo/client";
import { useState } from "react";

const useSignUpMutation = gql`
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

const useSignUp = ()=>{
  const [errorMsg, setErrorMsg] = useState(null)
  const [acceptTerms, setAcceptTerms] = useState(false)
  const [createUser, {loading, error, data}] = useMutation();

  const signUp = async(name, email, password)=>{
    try {
      const response = await createUser({
        variables: {
          name,
          email,
          password
        }
      });
      if (response.data.createUser.token) {
        return response.data.createUser
      } else {
        setErrorMsg("Signup failed. Please try again.")
      }
    } catch (error) {
      setErrorMsg(error.message || "An error occurred during signup.")
    }
  }

  return {
    signUp,
    loading,
    error,
    data,
    errorMsg,
    acceptTerms,
    setAcceptTerms
  }
};

export default useSignUp;
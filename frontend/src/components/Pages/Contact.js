import { gql, useMutation } from '@apollo/client'
import React, { useState } from 'react'

const contactMutation = gql`
mutation CreateContact($email: String!, $subject: String!, $message: String!) {
  createContact(email: $email, subject: $subject, message: $message) {
    email
    subject
    message
  }
}
`

const Contact = () => {
  const [email, setEmail] = useState(null)
  const [subject, setSubject] = useState(null)
  const [message, setMessage] = useState(null)
  const [errorMessage, setErrorMsg] = useState(null)
  const [data, setData] = useState(null)
  const [createContact, { loading, error }] = useMutation(contactMutation)
 
  
  const handleSubmit = async (e) => {
    console.log("hjii");
    if(email && subject && message) {
        try {
            const response = await createContact({
              variables: {email, subject, message}
            })
            if (response?.data?.createContact) {
              // setData(response.data.createContact)
              console.log(response.data.createContact, "===>data");
            }
        } catch (error) {
          setErrorMsg('Contact create failed. Please try again.');
        }
    } else {
      setErrorMsg("Please fill all fields")
    }
  }

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error occurred: {error.message}</div>;
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
      {data && <div className="text-green-700">{data}</div>}
      {errorMessage && <div className="text-red-700">{errorMessage}</div>}
        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">Contact Us</h2>
        <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">Got a technical issue? Want to send feedback about a beta feature? Need details about our Business plan? Let us know.</p>
        <form className="space-y-8" onSubmit={(e)=>e.preventDefault()}>
          <div>
            <label className="contact-label">Your email</label>
            <input type="email" onChange={(e)=> setEmail(e.target.value)} className="contact-input" placeholder="name@flowbite.com" />
          </div>
          <div>
            <label className="contact-label">Subject</label>
            <input type="text" onChange={(e)=> setSubject(e.target.value)} className="contact-input" placeholder="Let us know how we can help you"  />
          </div>
          <div className="sm:col-span-2">
            <label className="contact-label dark:text-gray-400">Your message</label>
            <textarea id="message" rows="6" className="contact-input focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Leave a comment..." onChange={(e)=> setMessage(e.target.value)} ></textarea>
          </div>
          <button type="submit" className="btn-blue" onClick={handleSubmit}>Send message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact
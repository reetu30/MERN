import React from 'react'

const Contact = () => {
  return (
    <section className="bg-white dark:bg-gray-900">
  <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
      <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">Contact Us</h2>
      <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">Got a technical issue? Want to send feedback about a beta feature? Need details about our Business plan? Let us know.</p>
      <form action="#" className="space-y-8">
          <div>
              <label for="email" className="contact-label">Your email</label>
              <input type="email" id="email" className="contact-input" placeholder="name@flowbite.com" required/>
          </div>
          <div>
              <label for="subject" className="contact-label">Subject</label>
              <input type="text" id="subject" className="contact-input" placeholder="Let us know how we can help you" required/>
          </div>
          <div className="sm:col-span-2">
              <label for="message" className="contact-label dark:text-gray-400">Your message</label>
              <textarea id="message" rows="6" className="contact-input focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Leave a comment..."></textarea>
          </div>
          <button type="submit" className="btn-blue">Send message</button>
      </form>
  </div>
</section>
  )
}

export default Contact
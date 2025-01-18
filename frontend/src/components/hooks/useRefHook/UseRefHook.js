import Reac0t, {useRef, useState} from 'react'

const UseRefHook = () => {
   const name = useRef(null)
   const email = useRef(null)
   const [nm, setNm] = useState("")
   const [em, setEm] = useState("")

   const handleClick = (e)=>{
        e.preventDefault();
        const nameValue = name.current.value
        const emailValue = email.current.value
        setNm(nameValue)
        setEm(emailValue)
   }
  return (
    <>
        <div className='mt-4 mb-4 '>
        <h1>UseRefHook</h1>
        {nm} : {em}
        <form className="space-y-8 w-1/4 m-auto mt-4">
            <input type='text' className="contact-input" ref={name}/>
            <input type='email' className="contact-input" ref={email}/>
            <input type='button' className='btn-blue' value="Button" onClick={handleClick}/>
        </form>
        </div>
    </>
  )
}

export default UseRefHook
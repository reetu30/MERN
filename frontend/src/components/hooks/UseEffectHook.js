import React, {useEffect, useState} from 'react'
import { URL_EFFECT } from '../constant/constant'

const UseEffectHook = () => {
    const [data, setData] = useState("")
    const [isRun, setIsRun] = useState(false)
    const [timer, setTimer] = useState(0)

    const dataFetch = async()=>{
        const response = await fetch(URL_EFFECT);
        const result = await response.json()
        setData(result)
    }

    const handleClickStart = ()=> setIsRun(true)
    const handleClickStop = () => setIsRun(false)
    useEffect(() => {
        let time;
        if (isRun) {
            time = setInterval(()=>{
                setTimer((prev) => prev+1)
            }, 100)
        }
        dataFetch()
        return () => {
            clearInterval(time);
            // clearTimeout
        }
    }, [isRun])
    
  return (
    <div className='m-auto mb-8 mt-8'>
        <h1 className='mb-4'>UseEffectHook</h1>
        <div className='flex'>
        <div className=' grid-cols-2 w-1/2'>
            <ul>
                <li>Data Fecth example</li>
                <li>{data.id}:{data.title}:{data.userId}</li>
                <li>{data.body}</li>
            </ul>
        </div>
        <div className='  grid-cols-2 w-1/3'>
            <button onClick={handleClickStart} className='btn-blue px-6 py-1'>+</button>
            <p>{timer}</p>
            <button onClick={handleClickStop} className='btn-blue bg-red-800  px-6 py-1'>-</button>
        </div>
        </div>
    </div>
  )
}

export default UseEffectHook
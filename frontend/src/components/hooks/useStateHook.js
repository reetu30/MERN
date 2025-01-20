import React, {useState} from 'react'
import UseEffectHook from './UseEffectHook';
// import UseContextHook from './useContextHook/useContextHook';
import UseRefHook from './useRefHook/UseRefHook';
import ReduxExample from '../redux/reduxExample';
import UseMemoHook from './useMemoHook';

const UseStateHook = () => {
    const [count, setCount] = useState(0);
    const handleClickPlus = ()=>{
        setCount((prev) => prev + 1)
    }
    const handleClickMin = ()=>{
        (count === 0) ? setCount(0) :setCount((prev) => prev - 1) 
    }
  return (
    <div className='text-center m-auto'>
      <UseMemoHook></UseMemoHook>
        <hr></hr>
      <ReduxExample></ReduxExample>
        <hr></hr>
      <UseRefHook></UseRefHook>
        <hr></hr>
        {/* <UseContextHook></UseContextHook> */}
        <hr></hr>
        <UseEffectHook></UseEffectHook>
        <hr></hr>
        <h1>use State hook</h1>
        <button onClick={handleClickPlus} className='btn-blue px-6 py-1'>+</button>
        <p>{count}</p>
        <button onClick={handleClickMin} className='btn-blue bg-red-800  px-6 py-1'>-</button>
    </div>
  )
}

export default UseStateHook
import React from 'react';
import {increment, decrement } from './actions';
import { useDispatch, useSelector } from 'react-redux';

const ReduxExample = () => {
    const dispatch = useDispatch();
    const count = useSelector(state => state.count)
  return (
    <>
        <div className='mt-4 mb-4'>
            <h1>Redux Example</h1>
            <button onClick={() => dispatch(increment())} className='btn-blue bg-lime-600 px-6 py-1'>+</button>
            <p>{count}</p>
            <button onClick={() => dispatch(decrement()) } className='btn-blue bg-orange-400  px-6 py-1'>-</button>
        </div>
    </>
  )
}

export default ReduxExample
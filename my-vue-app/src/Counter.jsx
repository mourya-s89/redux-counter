import React  from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {increment,decrement } from './redux/counterSlice';

const Counter = () => {
    const count =useSelector((state)=>state.counter.count);
    const dispatch = useDispatch();
  return (
    <div>
       <div>count:{count}</div>
       <button onClick={()=>dispatch(increment(1))}>Increment</button>
       <button onClick={()=>dispatch(decrement(1))}>Decrement</button>
    </div>
  )
}

export default Counter

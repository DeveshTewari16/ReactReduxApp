import classes from './Counter.module.css';
import {useSelector,useDispatch} from 'react-redux';
import React,{useState} from 'react';
import {counterActions} from '../store/index';


const Counter = () => {
  const counterValue=useSelector((state)=>state.counter.counter);

  const dispatch=useDispatch(); //We created dispatch object to dispatch action 

  const [isToggle,setisToggle]=useState(false);
  const toggleCounterHandler = (e) => {
    e.preventDefault();
    setisToggle(!isToggle);
    console.log('Clicked Toggle ')
  };

  const addCounterHandler=()=>{
    dispatch(counterActions.counter.increment());
  }
  const reduceCounterHandler=()=>{
    dispatch(counterActions.counter.decrement());
  }

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counterValue}</div>
      <div className=""></div>
      <button onClick={toggleCounterHandler} style={{padding:"10px",margin:"0px 10px 10px 10px"}}>Toggle Counter</button> <br></br>
      {!isToggle && <button onClick={addCounterHandler} style={{padding:"10px",margin:"0px 10px 10px 10px"}}>Add Counter</button>}
      {!isToggle && <button onClick={reduceCounterHandler} style={{padding:"10px",margin:"0px 10px 10px 10px"}} >Reduce Counter</button>}
    </main>
  );
};

export default Counter;

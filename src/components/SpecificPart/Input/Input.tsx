import React from 'react';
import { useCounter } from "./hook/useInput";

const Input = () => {
    //     const {nameChange, ageChange, descriptionChange, inputObj} = useInputChange();
    const { increment, decrement, getCount, reset } = useCounter(0);
    return (
        <>
            <p>Count: {getCount()}</p>
            <button onClick={increment}>+</button>
            <button onClick={decrement}>-</button>
            <button onClick={reset}>reset</button>
        </>
    );
};

export default Input;
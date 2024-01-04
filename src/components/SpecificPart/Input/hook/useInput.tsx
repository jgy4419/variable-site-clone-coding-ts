import { useState } from "react";

// 커스텀 훅 정의
export const useCounter = (initialValue: number = 0) => {
    const [count, setCount] = useState(initialValue);

    function increment() {
        setCount(count + 1);
    }

    function decrement() {
        setCount(count - 1);
    }

    function reset() {
        setCount(initialValue);
    }

    function getCount() {
        return count;
    }

    return {
        increment,
        decrement,
        reset,
        getCount
    }
}
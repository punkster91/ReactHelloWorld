import React, { useState, useEffect } from 'react'

function Counter() {
    const [count, setCount] = useState(0);

    // Function to double the count
    const doubleCount = () => {
        setCount(count * 2);
    };

    // Set up an interval to increment count every second
    useEffect(() => {
        const intervalId = setInterval(() => {
            setCount(count => count + 1);
        }, 1000);

        // clean up code
        return () => clearInterval(intervalId);
    }, []); // dependencies array

    return (
        <div style={{ textAlign: "center", marginTop: "20px" }}>
            <h1>Count: {count}</h1>
            <button onClick={doubleCount}>Double Count</button>
        </div>
    );
}

export { Counter }
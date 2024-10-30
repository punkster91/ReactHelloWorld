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
            <h4>You have a Counter component that keeps track of a count and has a Double Increment feature. The component increments the count by 1 every second automatically using an interval, and there's a button that doubles the count when clicked.</h4>
            <h1>Count: {count}</h1>
            <button onClick={doubleCount}>Double Count</button>
        </div>
    );
}

export { Counter }
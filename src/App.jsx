import React, { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
function App() {
    const [count, setCount] = useState(0)

    const increment = () => setCount(count + 1);
    const decrement = () => {
        if (count > 0){
            setCount(count - 1)
        }
    };
    //const reset = () => setCount(0);

    const reset = () => setCount(0);

    const isResetDisabled = () => count === 0;
    const isDecrementDisabled = () => count === 0;

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
          <div className="card">
              <h1>Counter: {count}</h1>
       
              <button onClick={increment}>Increment</button>
              <button onClick={decrement} disabled={isDecrementDisabled()}>Decrement</button>
              <button onClick={reset} disabled={isResetDisabled()}>Reset</button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export { App }
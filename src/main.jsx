import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App.jsx'
import { Profile } from './Profile.jsx'
import { Counter } from './Counter.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
        <App />
        <hr></hr>
        <Counter />
        <hr></hr>
        <Profile/>
    </React.StrictMode>,
)

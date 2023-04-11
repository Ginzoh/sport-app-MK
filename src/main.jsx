import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import NavBar from './nav/NavBar'
import SecondNavBar from './nav/LeftBar'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <NavBar />
    <article className="container">
      <SecondNavBar />
      <App />
    </article>
  </React.StrictMode>,
)

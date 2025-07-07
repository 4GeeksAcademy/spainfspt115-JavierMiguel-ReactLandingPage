import React from 'react'
import ReactDOM from 'react-dom/client'

//Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap"

// index.css'
import '../styles/index.css'

// components

import { Navbar } from "./components/Navbar";
import { Content } from "./components/Content";
// import { Footer } from "./components/Footer";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Navbar />
    <Content />
  </React.StrictMode>,
)

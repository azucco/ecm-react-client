import React, { Component } from 'react'
import logo from '../components/ecm_logo_darkbg.png'
import { Link } from 'react-router-dom'

export default function HomePage() {
  return (
       
<body id="page-top">
    <nav class="navbar navbar-expand-lg bg-secondary text-uppercase fixed-top" id="mainNav">
    <div class="container">
        <a class="navbar-brand js-scroll-trigger" href="#page-top">
        <img className="logo" alt="ECM" src={logo} />
        </a>
       {/*  <button class="navbar-toggler navbar-toggler-right text-uppercase font-weight-bold bg-primary text-white rounded" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
        Menu
        <i class="fas fa-bars"></i>
        </button> */}
        <div /* class="collapse navbar-collapse" id="navbarResponsive" */>
        <ul class="navbar-nav ml-auto">
            <li class="nav-item mx-0 mx-lg-1">
            <a class="nav-link py-3 px-lg-3 rounded js-scroll-trigger" href="#portfolio">Io</a>
            </li>
            <li class="nav-item mx-0 mx-lg-1">
            <a class="nav-link py-3 px-lg-3 rounded js-scroll-trigger" href="#about">L'ufficio</a>
            </li>
            <li class="nav-item mx-0 mx-lg-1">
            <a class="nav-link py-3 px-lg-3 rounded js-scroll-trigger" href="#contact">Profilo</a>
            </li>
        </ul>
        </div>
    </div>
    </nav>

    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>






    <footer class="footer text-right">
    <div class="container">
      <div class="row">
        <div className="col-lg-12">
          <p class="lead mb-0">Sviluppato con <a href="https://expressjs.com/" target="_blank">Express.js</a> e <a href="https://reactjs.org/" target="_blank">React</a></p>
        </div>
      </div>
    </div>
  </footer>
</body>
    /* <div className="container">
      <h1>Home Page</h1>
      <p>
        <Link to="/taniarascia">taniarascia</Link> on GitHub.
      </p>
    </div> */
  )
}
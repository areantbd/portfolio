import React, { useContext, useEffect, useRef, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { LangContext } from "../../../contexts/LangContext";
import espana from "./icons/espana.png"
import england from "./icons/reino-unido.png"

function NavBar() {
  const navButton = useRef(null);
  const linksContainerRef = useRef(null);
  const [lang, setLang] = useState(undefined)
  const languaje = useContext(LangContext)

  useEffect(() => {
    setLang(languaje)
  }, [languaje])

  function collapseNav() {
    navButton.current.classList.add("collapsed");
    linksContainerRef.current.classList.remove("show");
  }

  const handleClick = () => {
    if (lang?.lang === "eng") {
      languaje.setLang("esp")
    } else {
      languaje.setLang("eng")
    }
  }
  
  return lang?.lang === "eng" ? (
    <nav className="navbar navbar-expand-lg bg-secondary bg-gradient fixed-top">
      <div className="container-fluid">
        <Link className="navbar-brand text-light ms-3" to="/portfolio" onClick={collapseNav}>
          My Portfolio
        </Link>
        <div type="button" onClick={() => handleClick()} disabled="true" className="ms-auto me-3 d-flex gap-2">
          <span><img className="text-dark" src={espana} width="30" alt="español"></img></span>
        </div>
        <button
          ref={navButton}
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse " id="navbarNav" ref={linksContainerRef}>
          <ul className="navbar-nav ms-auto me-3" >
            <li className="nav-item" >
              <NavLink className="nav-link text-light" aria-current="page" to="/about" onClick={collapseNav} >
                About me
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link text-light" to="/projects" onClick={collapseNav} >
                Projects
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link text-light" to="/certificates"  onClick={collapseNav} >
                Certificates
              </NavLink>
            </li>
            <li className="nav-item">
              <a className="nav-link text-light" href="https://drive.google.com/file/d/1RBZLcNbRzvwgJaYDIUh5gM47I6FH8-r-/view?usp=share_link" target="_blank" onClick={collapseNav} rel="noreferrer" >Curiculum Vitae</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  ) : (
    <nav className="navbar navbar-expand-lg bg-secondary bg-gradient fixed-top">
      <div className="container-fluid">
        <Link className="navbar-brand text-light ms-3" to="/portfolio" onClick={collapseNav}>
          Mi Portfolio
        </Link>
        <div type="button" onClick={() => handleClick()} className="ms-auto me-3 d-flex gap-2">
          <span><img className="text-dark" src={england} width="30" alt="england"></img></span>
        </div>
        <button
          ref={navButton}
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse " id="navbarNav" ref={linksContainerRef}>
          <ul className="navbar-nav ms-auto me-3" >
            <li className="nav-item" >
              <NavLink className="nav-link text-light" aria-current="page" to="/about" onClick={collapseNav} >
                Sobre mi
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link text-light" to="/projects" onClick={collapseNav} >
                Proyectos
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link text-light" to="/certificates"  onClick={collapseNav} >
                Certificados
              </NavLink>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-light" to="/certificates"  onClick={collapseNav} >Libre</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default NavBar;

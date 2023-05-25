import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

import "../components/NavBar.css"

const NavBar = () => {
  return (
    <div  >


<Nav className="me-auto" >
  <h5 className="title">YoungCamp</h5>
            <Link to='/'><Nav> _Accueil </Nav></Link>

          <Link to='/Contact'><Nav> _Contact </Nav></Link>
          <Link to='/Panier'><Nav> _Panier </Nav></Link>      
          <Link to='/Catégories'><Nav> _Catégories </Nav></Link> 
          <div style={{paddingLeft : '500px', display:'flex',flexdirection:'row', width:'50%'}}>
           <Link to='/Connexion'><Nav> _Connexion </Nav></Link>  
           <Link to='/AddPerson'><Nav> _Inscription </Nav></Link>  
           </div>
           

          </Nav>
     


    </div>
  );
};
export default NavBar;




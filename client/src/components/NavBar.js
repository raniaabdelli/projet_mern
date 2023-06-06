import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

import "../components/NavBar.css";

const NavBar = () => {
  return (
    <div>
      <Nav className="me-auto">
        <div
          style={{
            marginTop: "10px",

            display: "flex",
            flexDirection: "row",
            backgroundColor: null,
            fontSize: "22px",

            /* ou ajustez la valeur selon vos besoins */
            color: "#facb00",
            height: "5px",
            marginLeft: "0px",
            paddingLeft: "0px",
            border: "1px solid rgba(0, 0, 0, 0.05)",
          }}
        >
          <a href="" className="logo">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              fill="#facb00"
              class="bi bi-signpost-2-fill"
              viewBox="0 0 16 16"
            >
              <path d="M7.293.707A1 1 0 0 0 7 1.414V2H2a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h5v1H2.5a1 1 0 0 0-.8.4L.725 8.7a.5.5 0 0 0 0 .6l.975 1.3a1 1 0 0 0 .8.4H7v5h2v-5h5a1 1 0 0 0 1-1V8a1 1 0 0 0-1-1H9V6h4.5a1 1 0 0 0 .8-.4l.975-1.3a.5.5 0 0 0 0-.6L14.3 2.4a1 1 0 0 0-.8-.4H9v-.586A1 1 0 0 0 7.293.707z" />
            </svg>
          </a>
          <h5 className="title">YoungCamp</h5>
        </div>
        <div
          style={{
            border: "1px solid rgb(253,242,193)",
            borderRadius: "50px",
            display: "flex",
            flexDirection: "row",
            marginTop: "10px",
            marginLeft: "10px",
          }}
        >
          <Link to="/">
            <Nav> Accueil </Nav>
          </Link>
          <div style={{ borderLeft: "1px solid rgb(253,242,193)" }}></div>
          <Link to="/Contact">
            <div> Contact </div>
          </Link>{" "}
          <div style={{ borderLeft: "1px solid rgb(253,242,193)" }}></div>
          <Link to="/Panier">
            <Nav> Panier </Nav>
          </Link>{" "}
          <div style={{ borderLeft: "1px solid rgb(253,242,193)" }}></div>
          <Link to="/Catégories">
            <Nav> Catégories </Nav>
          </Link>{" "}
          <div style={{ borderLeft: "1px solid rgb(253,242,193)" }}></div>
          <Link to="/GetPersonList">
            <Nav> Affichage </Nav>
          </Link>{" "}
          <div style={{ borderLeft: "1px solid rgb(253,242,193)" }}></div>
          <button
            style={{
              backgroundColor: "rgb(253,242,193)",
              marginLeft: "10px",
              marginTop: "5px",
              marginRight: "10px",
              borderRadius: "100px",
              height: "30px",
              width: "30px",
            }}
          >
            <svg
              style={{ paddingTop: "-5px", marginTop: "-18px" }}
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-search"
              viewBox="0 0 16 16"
            >
              <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
            </svg>
          </button>
        </div>
        <div
          style={{
            paddingLeft: "500px",
            display: "flex",
            flexdirection: "row",
            width: "50%",
          }}
        >
          <div
            style={{
              border: "1px solid rgb(253,242,193)",
              borderRadius: "50px",
              display: "flex",
              flexDirection: "row",
              marginTop: "10px",
              paddingRight: "10px",
              paddingLeft: "10px",
            }}
          >
            <Link to="/Connexion">
              <svg
                style={{ color: "rgb(255,248,203)" }}
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                fill="currentColor"
                class="bi bi-person-fill"
                viewBox="0 0 16 16"
              >
                <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3Zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
              </svg>
            </Link>

            <Link to="/AddPerson">
              <svg
                style={{
                  borderLeft: "1px solid rgb(253,242,193)",
                  color: "rgb(255,248,203)",
                }}
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                fill="currentColor"
                class="bi bi-person-add"
                viewBox="0 0 16 16"
              >
                <path d="M12.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Zm.5-5v1h1a.5.5 0 0 1 0 1h-1v1a.5.5 0 0 1-1 0v-1h-1a.5.5 0 0 1 0-1h1v-1a.5.5 0 0 1 1 0Zm-2-6a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM8 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" />
                <path d="M8.256 14a4.474 4.474 0 0 1-.229-1.004H3c.001-.246.154-.986.832-1.664C4.484 10.68 5.711 10 8 10c.26 0 .507.009.74.025.226-.341.496-.65.804-.918C9.077 9.038 8.564 9 8 9c-5 0-6 3-6 4s1 1 1 1h5.256Z" />
              </svg>
            </Link>
          </div>{" "}
        </div>
      </Nav>
    </div>
  );
};
export default NavBar;
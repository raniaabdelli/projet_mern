import React from "react";
import vaisselles from "./img/vaisselles.png";
import vétements from "./img/vétements.png";
import camping from "./img/camping.png";
import loisirs from "./img/loisirs.png";
import "./Catégories.css";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
//background-image:url("./a.webp");

const Catégories = () => {
  return (
    <div
      style={{
        //backgroundImage:`url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBR0owvSQkMrQL3zDOmiMgEra1b35PdZ3j9A&usqp=CAU")` ,
        backgroundColor: null,
        //'#afcc96',
        backgroundSize: "cover",
        backgroundPosition: "center",

        //width: '90vw',
        //width: '100%',
        //height: '90vh',
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        paddingLeft: "2vh",
        margin: "20vh",

        //  overflow: 'hidden'
      }}
    >
      <b>
        <i className="titre">Découvrir nos catégories</i>
      </b>
      <br></br>
      <br></br>
      <br></br>

      <div className="catégories">
        <table>
          <tr>
            <th>
              <img className="m" src={loisirs} width="130" />
            </th>
            <th>
              <img className="m" src={vaisselles} width="130" />
            </th>
            <th>
              <img className="m" src={camping} width="130" />
            </th>

            <th>
              <img className="m" src={vétements} width="130" />
            </th>
          </tr>
          <br></br>
          <br></br></table>
<table  style={{marginLeft: '70px'}}><tr>
            <td className="b"
>
              <Button
                style={{
                  backgroundColor: "#afcc96",
                  fontSize: "22px",
                  color: "#1e4f4e",
                  border: "0px",
                }}
              >
                <b>
                  <i>Loisirs</i>
                </b>
              </Button>
            </td>

            <td className="b">
              <Button
                style={{
                  backgroundColor: "#afcc96",
                  fontSize: "22px",
                  color: "#1e4f4e",
                  border: "0px",
                }}
              >
                <b>
                  <i>Vaisselles</i>
                </b>
              </Button>
            </td>

            <td className="b">
              <Button
                style={{
                  backgroundColor: "#afcc96",
                  fontSize: "22px",
                  color: "#1e4f4e",
                  border: "0px",
                }}
              >
                <b>
                  <i>Vétements</i>
                </b>
              </Button>
            </td>

            <td className="b">
              <Button
                style={{
                  backgroundColor: "#afcc96",
                  fontSize: "22px",
                  color: "#1e4f4e",
                  border: "0px",
                }}
              >
                <b>
                  <i>Matériel </i>
                </b>
              </Button>
            </td>
          </tr></table>
        
      </div>
    </div>
  );
};
export default Catégories;

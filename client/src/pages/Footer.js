import React from "react";
import fb from "./img/fb.png";
import insta from "./img/insta.png";
import ln from "./img/ln.png";

const Footer = () => {
  return (
    <div
      style={{
        backgroundColor: null,
        backgroundSize: "cover",
        overflow: "hidden",
        padding: "0vh",
        margin: "0vh",
      }}
    >
      <form style={{ color: "#fdf2c1" }}><b>
        Search <input type="text" placeholder="Search YoungCamp" style={{backgroundColor:'#fdf2c1'}} name="search" size="100" /></b>
      </form>
      <div
        style={{
          marginTop: "100px",
          display: "flex",
          flexDirection: "wrap",
          marginLeft: "500px",
        }}
      >
        <div style={{ color: "#fdf2c1",fontSize:'20px' }}>
          <div>
            <p>
              <b>E-mail </b>YoungCamp@gmail.com<br></br>
              <b>Adresse </b>Sidi Bou Ali, Sousse<br></br>
              <b>Tél </b>+216 54 714 104
            </p>
          </div>
        </div>
        <div>
          <p>
            {" "}
            <table border="0" style={{ backgroundColor: null }}>
              <tr>
                <th>
                  <img src={fb} width="40" alt="fb"/>
                </th>
                <th>
                  <img src={insta} alt="insta" width="40" />
                </th>
                <th>
                  <img src={ln} alt="linkedIn" width="40" />{" "}
                </th>
              </tr>
              <tr>
                <td>
                  <a href="https://www.facebook.com/rania.abdelli/">Facebook</a>
                </td>

                <td>
                  <a href="https://www.instagram.com/raniaabdelli/">Instgram</a>
                </td>
                <td>
                  <a href="https://www.linkedin.com/in/rania-abdelli-8bb1b3142/">
                    LinkedIn
                  </a>
                </td>
              </tr>
            </table>
            <i> All rights are reserved for YoungCamp.com © 2023</i>
          </p>
        </div>
        <p></p>
      </div>
    </div>
  );
};
export default Footer;

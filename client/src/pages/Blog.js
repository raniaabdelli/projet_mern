import React from "react";
import { useNavigate } from "react-router-dom";
import picture1 from "./img/picture1.jpg";

import picture2 from "./img/picture2.png";
import picture from "./img/picture.jpg";
import da from "./img/da.png";
import "./Blog.css";
import Qsn from "./Qsn";
const Blog = ({ getQsn }) => {
  const navigate = useNavigate();
  return (
    <div className="blog">
      <div
        style={{
          backgroundColor: "#fdf2c1",
        }}
      >
        <div>
          <p>
            <b>
              <i className="quote">
                Aller au camping c'est simplement aller à la vie
              </i>
            </b>
          </p>
        </div>
        <div className="bl">
          <img
            className="im"
            src={picture}
            width="300"
            height="200"
            alt="CampPicture"
          />
          <img
            className="im"
            src={picture1}
            width="300"
            height="200"
            alt="CampPicture"
          />
          <img
            className="im"
            src={da}
            width="300"
            height="200"
            alt="CampPicture"
          />
          <img
            className="im"
            src={picture2}
            width="300"
            height="200"
            alt="CampPicture"
          />
        </div>
        <button
          style={{
            backgroundColor: "#afcc96",
            marginTop: "10px",
            marginBottom: "10px",
          }}
          onClick={() => {
            navigate("/Qsn");
          }}
        >
          Voir Plus
        </button>
      </div>
    </div>
  );
};
export default Blog;
/*h1>This is Home page</h1>
        <button onClick={()=>{navigate('/Contact')}}>GetContact</button>
        <button onClick={getProfile}>GetProfile</button>*/

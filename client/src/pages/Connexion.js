import React from "react";
import fb from "./img/fb.jpeg";
import insta from "./img/insta.jpeg";
import ln from "./img/ln.jpeg";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useState } from "react";

import { useDispatch } from "react-redux";
const Connexion = () => {
  const [data, setData] = useState({});
  const dispatch=useDispatch()
  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  return (
    
<div><h2 style={{color :'rgb(255,251,204)',fontWeight:'bold',fontSize:'40px',paddingTop:'100px',paddingLeft:'100px',backgroundColor:'null',fontsize:'50px'}}>Connecter à YoungCamp</h2>
   
    
    
    <Form style={{paddingBottom:'15px',paddingLeft:'30px',paddingRight:'30px',width:'50%',color :'#20807f',paddingTop:'15px',marginLeft:'400px',fontWeight:'bold',fontsize:'50px',marginTop:'30px',backgroundColor:'rgb(139,206,186)',borderRadius:'10px'}}>
      
      
        
      <Form.Group classNme="mb-3" controlId="formBasicEmail">
        <Form.Label>Addresse e-mail</Form.Label>
        <Form.Control
          type="mail"
          placeholder="Entrer  votre adresse e-mail"
          name="email"
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Group classNme="mb-3">
        <Form.Label>Mot de passe</Form.Label>
        <Form.Control
          type="text"
          placeholder="Entrer votre mot de passe"
          name="password"
          onChange={handleChange}
        />
      </Form.Group>
    
     
      
     
      <Button type="submit" style={{backgroundColor :'#20807f',color:'rgb(255,251,204)',marginTop:'15px'}}>Connecter</Button>

    </Form></div>
 
  );
};
export default Connexion;

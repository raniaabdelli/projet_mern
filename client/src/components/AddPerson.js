import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useState } from "react";
import { addPerson } from "./redux/actions/personAction";
import { useDispatch } from "react-redux";
const AddPerson = () => {
  const [data, setData] = useState({});
  const dispatch=useDispatch()
  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  return (<div><h2 style={{color :'rgb(255,251,204)',fontWeight:'1300',paddingTop:'100px',paddingLeft:'150px',backgroundColor:'null',fontSize:'45px',marginLeft:'350px'}}>Inscription</h2>
    <Form style={{paddingBottom:'15px',paddingLeft:'30px',paddingRight:'30px',width:'35%',color :'#8BCEBA',paddingTop:'15px',marginLeft:'800px',fontWeight:'1500',fontSize:'20px',marginTop:'30px',backgroundColor:'null',borderRadius:'10px', }}>
      
      
        
      <Form.Group classNme="mb-3" controlId="formBasicEmail">
        <Form.Label>Addresse E-mail</Form.Label>
        <Form.Control
          type="email"
          placeholder="Entrer  votre e-mail"
          name="email"
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Group classNme="mb-3">
        <Form.Label>Nom</Form.Label>
        <Form.Control
          type="text"
          placeholder="Entrer votre nom"
          name="name"
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Group classNme="mb-3">
        <Form.Label>Addresse</Form.Label>
        <Form.Control
          type="text"
          placeholder="Entrer votre Addresse"
          name="address"
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
      <Button type="submit" onClick={()=>dispatch(addPerson(data))} style={{marginTop :'15px',backgroundColor :'null',color:'rgb(255,251,204)'}}>Confirmer</Button>

    </Form></div>
  );
};
export default AddPerson;

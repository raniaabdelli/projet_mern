import React from "react";
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import { useState } from "react";

import { useDispatch,useSelector } from "react-redux";

const GetPersonList = () => {
    const [data, setData] = useState({});
    const dispatch=useDispatch()
    const persons=useSelector(state=>state)
    const handleChange = (e) => {
      setData({ ...data, [e.target.name]: e.target.value });
    };
  return (
    
<div>
<Button variant="primary" style={{margin:"20px"}}> Ajouter</Button>
<h2 style={{color:'rgb(253,242,193)'}} className="p-4">Liste des visiteurs</h2>
{persons?<Table striped bordered hover style={{ margin: "20px",weight:"600px"
}}>
      <thead>
        <tr>
          <th>#</th>
          <th>nom</th>
          <th>e-mail
          </th>
          <th>mot de passe</th>
          <th>adresse</th>
          <th>actions</th>

        </tr>
      </thead>
      <tbody>{
        persons.map((person,index)=>
        < tr key={index}>
          <td>{index}</td>
          <td>{person.name}</td>
          <td>{person.email}</td>
          <td>{person.password}</td>
          <td>{person.address}</td>
          
          <td>
          <Button variant="success" className="me-2">Editer</Button>
          <Button variant="danger">Supprimer</Button>

          </td>

        </tr>)
       
      }
      </tbody>
    </Table>:'aucun visiteur trouvé'}
 
    </div>
 
  );
};
export default GetPersonList
;
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Toast from "react-bootstrap/Toast";
import { deletePerson } from "./redux/actions/personAction";
import { getPerson } from "./redux/actions/personAction";

import { useDispatch } from "react-redux";

const Person = ({ person }) => {
  const dispatch = useDispatch();
  return (
    <Toast onClose={dispatch(deletePerson(person._id))}>
      <Toast.Header>
        <img src="holder.js/20x20?text=%20" className="rounded me-2" alt="" />
        <strong className="me-auto">{person.name}</strong>
        <small>11 mins ago</small>
      </Toast.Header>
      <Toast.Body>
        <div>{person.email}</div>
        <div>{person.address}</div>
        <div>{person.password}</div>
      </Toast.Body>
    </Toast>
  );
};
export default Person;

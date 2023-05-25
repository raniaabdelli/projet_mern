import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decriment, incriment } from "../slices/personSlice";
import picture from "./img/picture3.png";
import NavBar from "../components/NavBar";

const Accueil = () => {
  const { count } = useSelector((state) => state.person);
  const dispatch = useDispatch();
  return (
    <div >

   

    </div>
  );
};
export default Accueil;
      //<img src={picture} width="1400" />
/*
      <button onClick={() => dispatch(incriment())}>+</button>
      {count}
      
      <button onClick={() => dispatch(decriment())}>-</button>*/
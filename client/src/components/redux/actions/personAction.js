import axios from "axios";
import { GET_PERSON, ADD_PERSON, DELETE_PERSON } from "./Type";
const url = "http://localhost:5000";

export const getPerson = () => async (dispatch) => {
  await axios.get(url + "/get").then(
    (response) =>
    dispatch({
      type: GET_PERSON,
      payload: response.data.person,
    })
  );
};
export const addPerson = (newPerson) => async (dispatch) => {
  await axios.post(url + "/post", newPerson);
  dispatch({
    type: ADD_PERSON,
  });
  dispatch(getPerson());
};

export const deletePerson = (id) => async (dispatch) => {
  await axios.delete(`${url}/delete/${id}`);
  dispatch({
    type: DELETE_PERSON,
  });
  dispatch(getPerson());
};

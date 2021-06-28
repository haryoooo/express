import axios from "axios";
import { url } from "../../urlConfig";
import {
  LOAD_DATA,
  LOADING_DATA,
  ADD_DATA,
  DELETE_DATA,
  EDIT_DATA
} from "./actionType";

export function loadData(data){
  return {
    type: LOAD_DATA,
    payload: data,
  };
}

export function loadingData(data) {
  return {
    type: LOADING_DATA,
    payload: data,
  };
}

export function addData(data) {
  return {
    type: ADD_DATA,
    payload: data,
  };
}

export function deleteData(data) {
  return {
    type: DELETE_DATA,
    payload: data,
  };
}

export function editData(data) {
  return {
    type: EDIT_DATA,
    payload: data,
  };
}

export function fetchDatas() {
  return (dispatch) => {
    dispatch(loadingData(true));
    axios
      .get(`${url}/users`)

      .then((res) => {
        dispatch(loadingData(false));
        dispatch(loadData(res.data));
      })

      .catch((err) => {
        console.log(err);
      });
  };
}

export function addDatas(data) {
  return (dispatch) => {
    axios
      .post(`${url}/users`, data)

      .then((res) => {
        dispatch(addData(res.data));
        dispatch(fetchDatas())
      })

      .catch((err) => {
        console.log(err);
      });
  };
}

export function editDatas(data,id) {
  return (dispatch) => {
    axios
      .put(`${url}/users/${id}`, data)
      .then((res) => {
        dispatch(editData(res.data, id))
        dispatch(fetchDatas())
      })

      .catch((err) => {
        alert(err)
      });
  };
}

export function deleteDatas(id) {
  return (dispatch) => {
    axios
      .delete(`${url}/users/${id}`)

      .then((res) => {
        dispatch(deleteData(id));
        dispatch(fetchDatas())
      })

      .catch((err) => {
        alert(err)
      });
  };
}

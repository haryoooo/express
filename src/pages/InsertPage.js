import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useHistory } from 'react-router-dom'
import { addDatas } from "../store/action/dataAction";
import "./Insertpage.css";

export default function InsertPage() {
  const history = useHistory()
  const dispatch = useDispatch()
  const [nama, setNama] = useState("");
  const [usia, setUsia] = useState("");

  function addToData() {
    let condition;

    const data = {
      "nama": nama,
      "usia": Number(usia)
    }

    do {
      if (!nama) {
        condition = false;
        alert("Please the column name first!")
        return
      }

      if (!usia) {
        condition = false;
        alert("Please fill the column age first")
        return
      }

      if (nama && usia) {
        condition = true
        dispatch(addDatas(data))
        history.push('/Homepage')
        return
      }
    } while (condition)
  }

  return (
    <>
    <h1 style={{textAlign:'center', marginTop: 30}}>Insert Data Users</h1>
    <div className="Insertpage">
      <Form>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Nama :</Form.Label>
          <Form.Control type="text" placeholder="Masukkan Nama" onChange={(e) => setNama(e.target.value)} />
          <Form.Text className="text-muted"></Form.Text>
          <br></br>
          <Form.Label>Usia :</Form.Label>
          <Form.Control type="number" placeholder="Masukkan Usia" onChange={(e) => setUsia(e.target.value)} />
          <Form.Text className="text-muted"></Form.Text>

          <Button style={{marginTop: 20}} onClick={addToData}>Add Data</Button>
        </Form.Group>
      </Form>
    </div>
    </>
  );
}

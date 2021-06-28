import React, { useState } from "react";
import { Table, Button, Modal } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { deleteDatas, editDatas } from "../store/action/dataAction";

export default function HomepageComponent(props) {
    const dispatch = useDispatch();
    const [nama, setNama] = useState("")
    const [usia, setUsia] = useState("")
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    function deleteData(id) {
        dispatch(deleteDatas(id));
    }

    function handleChange(){
        handleShow()
        setNama(props.name)
        setUsia(props.usia)
    }

    function editTheData(id) {

        let condition;
    
        const data = {
           "nama": nama,
           "usia": Number(usia) 
        }   
    
        do {      
        if(!nama){
            condition = false;
            alert("Please the column name first!")
            return
        }
    
        if(!usia){
            condition = false;
            alert("Please fill the column age first")
            return
        }
    
        if(nama && usia){
            condition = true
            dispatch(editDatas(data, id))
            handleClose()
            return
        }
        }while(condition)
      }

    return (
        <div className="HomepageComponent">
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Nama</th>
                        <th>Usia</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{props.id}</td>
                        <td>{props.name}</td>
                        <td>{props.usia}</td>
                        <th>
                            <Button variant="success" onClick={handleChange}>Edit</Button>
                            {"  "}
                            <Button variant="danger" onClick={() => deleteData(props.id)}>Delete</Button>
                        </th>
                    </tr>
                </tbody>
            </Table>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Edit</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Nama : {" "}
                    <input
                        type="text"
                        onChange={(e) => setNama(e.target.value)}
                        value={nama}
                    />
                </Modal.Body>
                <Modal.Body>
                    Usia : {" "}
                    <input
                        type="text"
                        onChange={(e) => setUsia(e.target.value)}
                        value={usia}
                    />
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={()=>editTheData(props.id)}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}

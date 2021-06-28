// import React, { useState } from "react";
// import { Modal, Button } from "react-bootstrap";

// export default function ModalComponents(props) {
//   const [show, setShow] = useState(false);
//   const handleClose = () => setShow(false);
//   const handleShow = () => setShow(true);
//   const [nama, setNama] = useState("");
//   const [usia, setUsia] = useState("");

//   return (
//     <div>
//       <Button variant="primary" onClick={props.handleChange}>
//         Edit Button
//       </Button>

//       <Modal show={show} onHide={handleClose}>
//         <Modal.Header closeButton>
//           <Modal.Title>Edit</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//           Nama : {" "}
//           <input
//             type="text"
//             onChange={(e) => setNama(e.target.value)}
//             value={nama}
//           />
//         </Modal.Body>
//         <Modal.Body>
//           Usia : {" "}
//           <input
//             type="text"
//             onChange={(e) => setUsia(e.target.value)}
//             value={usia}
//           />
//         </Modal.Body>
//         <Modal.Footer>
//           <Button variant="secondary" onClick={handleClose}>
//             Close
//           </Button>
//           <Button variant="primary" onClick={props.editTheData}>
//             Save Changes
//           </Button>
//         </Modal.Footer>
//       </Modal>
//     </div>
//   );
// }

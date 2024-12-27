import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import EditForm from "./EditForm";
import { useEffect, useContext } from "react";
import EditContext from "./editContext";
import save from "./Save";


function Edit({ isOpen, onClose }) {

    const data = useContext(EditContext);


 function saljiZahtjev(e) {
 e.preventDefault();
    console.log("saljiPodatke",data);
        save(data.kontekst, "edit");
}

return (
    
      <Modal show={isOpen} onHide={onClose}>
        <Modal.Header closeButton>
          <Modal.Title>Uredi</Modal.Title>
        </Modal.Header>

        <Modal.Body>
            <EditForm  />
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={onClose}>Close</Button>
          <Button variant="primary" onClick={(e)=>{saljiZahtjev(e); onClose();}}>Save changes</Button>
        </Modal.Footer>
      </Modal>
  ); 
}

export default Edit;

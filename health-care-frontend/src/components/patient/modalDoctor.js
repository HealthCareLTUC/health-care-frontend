import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { useRef, useState } from 'react';
// import FavList from './FavList';

function ModalDoctor({ handleShow, handleClose, show, doctor, CommentHandler }) {
    const [Comment, setComment] = useState('')
    const commentInput = useRef('')

    async function handleSubmit(e) {
        e.preventDefault()
        const userComment = commentInput.current.value
        setComment(userComment)// to re render 
        const comentDoc = { ...doctor, userComment }
        CommentHandler(comentDoc, doctor.id)
        console.log(comentDoc,doctor.id)
    }

    
        
         

    return (
        <>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{doctor.name}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                   {doctor.appointment}</Modal.Body>

                <Form.Group onSubmit={(e) => handleSubmit(e)}
                    className="mb-3"
                    controlId="exampleForm.ControlTextarea1"
                >
                    <Form.Label>add comment</Form.Label>
                    <Form.Control as="textarea" rows={1} ref={commentInput} />
                    <Button type="submit" onClick={handleSubmit} variant="success">submit</Button>{' '}
                    {/* <Button type='submit' onClick={(e)=>HandleAddFav(e)} variant="warning"> FavList</Button>{' '} */}
                </Form.Group>
                <p>{Comment ? Comment : 'No Comment'}</p>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
            
        </>
    );
}
export default ModalDoctor;
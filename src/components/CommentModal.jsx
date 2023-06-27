
import { Modal, Button } from 'react-bootstrap'
import { useState, useEffect } from 'react'
import { ListGroup } from 'react-bootstrap';

const ApiKey="Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDdkZDIyOTM5N2RmMTAwMTRkZGRkYjgiLCJpYXQiOjE2ODc0MjM1OTIsImV4cCI6MTY4ODYzMzE5Mn0.zshdAertgqrJND9BmOfjOUW4RU_gpklt_9AZzOtUPUU"

function CommentModal({ handleModal,asin }) {
  const [comments, setComments] = useState([]);
 

  async function getCommentModal() {
    try {
      const response = await fetch(`https://striveschool-api.herokuapp.com/api/comments/${asin}`, {

        headers: {
          "Content-Type": "application/json",
          Authorization: ` ${ApiKey}`,
        },
      });
      if (response.ok) {
        const data = await response.json();
        setComments(data);
        
       
      }
    } catch (error) {
    }
  }
  useEffect(() => {
    getCommentModal();
  }, [asin]);

  async function postComment() {
    try {
        const response = await fetch(`https://striveschool-api.herokuapp.com/api/comments/0316389706`, {
        method: "POST",
        body: JSON.stringify({
            comment: "le m'appelle ousseynou je viens ",
            rate: 4,
            elementId: "0316389706",
        }),
        headers: {
            Authorization: ` ${ApiKey}`,
            "Content-Type": "application/json",
        },
        });
        const data = await response.json();
        console.log(data);
        return data;
    } catch (error) {
        console.log(error);
        return [];
    }
}
postComment();
  return (
    <div className="modal show" style={{ display: 'block', position: 'initial' }} aria-modal="true">
      <Modal.Dialog>
        <Modal.Header closeButton>
          <Modal.Title>Commenti</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          {comments && comments.map((comment) => {
            return (
              <ListGroup className="d-flex justify-content-between align-items-start" as="ol" numbered>
                <div key={comment._id} className="ms-2 me-auto">
                  <div>{comment.comment}</div>
                  <div>Voto: {comment.rate}</div>
                </div>
              </ListGroup>
            )
          })}

        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={handleModal}>Close</Button>

        </Modal.Footer>
      </Modal.Dialog>
    </div>
  )
}

export default CommentModal


import React from 'react';
import { Card,Col } from 'react-bootstrap';
import { useState } from 'react';
import CommentModal from '../CommentModal';

function SingleBook({ livre }) {
  const [selected, setSelected] = useState(false);
  const[show,setShow]=useState(false);

 const handleClick = (e) => {
 
    setSelected(!selected);
    let book = e.target.closest(".phase");
    
    if (selected) {
      book.style.color = "black";
    }
    else {
      book.style.color = "red";
    }

  };
  const handleModal = () => { 
    setShow(!show);
  };
  return (
    <Col xs={3}>  
    <Card className="phase" onClick={handleClick}>
      <Card.Img variant="top" src={livre.img} />
      <Card.Body>
        <Card.Title>{livre.title}</Card.Title>
        <Card.Text>{livre.category}</Card.Text>
        <Card.Text>{livre.price}</Card.Text>
        <Card.Text>{livre.asin}</Card.Text>
        <button className='btn btn-primary' onClick={handleModal}>Show</button>
        {show && <CommentModal  handleModal={handleModal} asin={livre.asin}  />}
        </Card.Body>
    </Card>
    </Col>
    
  );
  
}

export default SingleBook;







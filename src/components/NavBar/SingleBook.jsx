import React from 'react';
import { Card,Col } from 'react-bootstrap';
import { useState } from 'react';

function SingleBook({ livre }) {
  const [selected, setSelected] = useState(false);

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
  
  return (
    <Col xs={3}>  
    <Card className="phase" onClick={handleClick}>
      <Card.Img variant="top" src={livre.img} />
      <Card.Body>
        <Card.Title>{livre.title}</Card.Title>
        <Card.Text>{livre.category}</Card.Text>
        <Card.Text>{livre.price}</Card.Text>
      </Card.Body>
    </Card>
    </Col>
    
  );
  
}

export default SingleBook;







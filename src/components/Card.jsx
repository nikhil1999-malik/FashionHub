import React from 'react'
import { Card } from 'react-bootstrap';


function Cards(props) {
    return (
        
            <div className="col-md-4 col-lg-4 col-xl-4 mt-3">
              <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src={props.image} />
              <Card.Body>
             <Card.Title>{props.heading}</Card.Title>
             <div className="text-center">
                 <button className="btn btn-primary">Check Now</button>
             </div>
            
            </Card.Body>
             </Card>
             </div>
    )
}

export default Cards

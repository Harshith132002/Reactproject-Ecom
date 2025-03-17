import React from 'react';
import { Container } from 'react-bootstrap';
import { Form } from "react-bootstrap";
import Button from 'react-bootstrap/Button';


const Call = () => {
  return (
    <div style={{display:'flex'}}>
   <div>
    <Container>
    <div 
      style={{
        
        width: '300px',
        height: '400px', // Add height to center vertically
        display: 'flex',
        justifyContent: 'center', // Center horizontally
        alignItems: 'center', // Center vertically
      }}
    >
      <div style={{ width: '230px', textAlign: 'center', }}>
    
    <div style={{display:'flex'}}> <div> <img src="https://i.pinimg.com/736x/7e/21/b9/7e21b9661c85d61676143a8ae2c9a73b.jpg" alt="" style={{height:'30px'}} /></div> <div style={{paddingLeft:'20px'}}><h5>Call to us</h5></div></div>
      <b>  <p>Phone: +8801611122222</p></b>
        <hr />

        <div style={{display:'flex'}}> <div> <img src="https://i.pinimg.com/736x/7e/21/b9/7e21b9661c85d61676143a8ae2c9a73b.jpg" alt="" style={{height:'30px'}} /></div> <div style={{paddingLeft:'20px'}}><h5>Write to us to us</h5></div></div>
      <b> <p>Fill out form and we will contact you within 24 hours</p> </b>
      <b> <p>Email: customer@exclusive.com</p> </b> 
      <b> <p>Email: customer@exclusive.com</p></b> 
      </div>
    </div>
    </Container>
    </div>
    
       

      <div className="container" style={{height:'500px',width: '700px'}}>
        <div className="row">
          {/* Column 1 - Name */}
          <div className="col-sm">
            <Form.Group controlId="formName">
              
              <Form.Control type="text" placeholder="Enter your name" />
            </Form.Group>
          </div>

          {/* Column 2 - Email */}
          <div className="col-sm">
            <Form.Group controlId="formEmail">
             
              <Form.Control type="email" placeholder="Enter your email" />
            </Form.Group>
          </div>

          {/* Column 3 - Number */}
          <div className="col-sm">
            <Form.Group controlId="formNumber">
             
              <Form.Control type="tel" placeholder="Enter your number" />
            </Form.Group>
          
          </div>
          <div>
          <Form.Group controlId="formMessage">
  
   <Form.Control as="textarea" rows={10} placeholder="Enter your message" />
</Form.Group>
          </div>
          <div className="d-flex gap-2 mb-2 " style={{margin:'15px'}}>
        <Button  className="btn btn-danger" size="lg">
          Large button
        </Button>
        </div>
        </div>
      </div>
  </div>
  



  
  
  );
};

export default Call;

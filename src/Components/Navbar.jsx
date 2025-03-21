import { NavLink } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Navbar1() {
  return (
    <Navbar className="bg-body-tertiary" style={{ borderBottom: "2px solid black", paddingBottom: "25px", marginTop: '30px', width: "100%" }}>
      <div className="navbar-container">
        <Navbar.Brand href="#" style={{ fontWeight: "bolder" }}>Exclusive</Navbar.Brand>

        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
         
          <Nav className="me-auto my-2 my-lg-0" navbarScroll>
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/Contact">Contact</Nav.Link>
            <Nav.Link href="/About">About</Nav.Link>
            <Nav.Link href="Signup">Sign up</Nav.Link>
          </Nav>
          <Form className="d-flex" style={{padding:'0.5rem',boxSizing:'border-box'}}>
            <Form.Control
              type="search"
              placeholder="What are you looking for?"
              className="me-2"
              aria-label="Search"
            />
          </Form>
          <div style={{display:'flex',gap:"10px"}}>
          <a href="#"><button className='ibtn'><i className="fa fa-heart" aria-hidden="true"></i></button></a>
          <NavLink href='Cart'><button className='ibtn'><i class="fas fa-shopping-cart"></i><sup>{3}</sup></button></NavLink>
          </div>
        </Navbar.Collapse>
      </div>
    </Navbar>
    
  );
}

export default Navbar1;

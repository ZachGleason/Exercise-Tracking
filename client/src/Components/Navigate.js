import React from 'react'
import '../App.css';
import { Navbar, Nav, NavDropdown, Dropdown } from 'react-bootstrap'


const Navigate = () => {
  return (
                <div className="row">
                    <div className="col-md-12">
                            <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
                                    <Nav className="name2">
                                        <Nav.Link href="/">Home</Nav.Link>
                                    </Nav>
                                    <Nav className="mr-auto">
                                        <Nav.Link href="/programs">Programs</Nav.Link>
                                    </Nav>
                                    <Nav className="mr-auto">
                                        <Nav.Link href="/challenges">Challenges</Nav.Link>
                                    </Nav>
                                    <Navbar.Brand href="#home" className='name' >HEALTH LEAK</Navbar.Brand>
                                    <Nav className="mr-auto">
                                        <Nav.Link href="/nutrition">Nutrition</Nav.Link>
                                    </Nav>
                                    <Dropdown>
                                    <Dropdown.Toggle variant="dark" id="dropdown-basic" style={{ color: "grey "}}>
                                        Trackers
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu>
                                        <Dropdown.Item href="/weight">Weight</Dropdown.Item>
                                        <Dropdown.Item href="/water">Water</Dropdown.Item>

                                    </Dropdown.Menu>
                                    </Dropdown>
                                    <Dropdown>
                                    <Dropdown.Toggle variant="dark" id="dropdown-basic" style={{ color: "grey "}}>
                                        More
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu>
                                        <Dropdown.Item href="/contact">Contact</Dropdown.Item>  
                                        <Dropdown.Item href="/faq">FAQ</Dropdown.Item>
                                    </Dropdown.Menu>
                                    </Dropdown>
                            </Navbar>
                            <br />
                    </div>
                </div>
  )
}

export default Navigate;
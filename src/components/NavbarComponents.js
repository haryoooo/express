import React from "react";
import {
    Link
  } from "react-router-dom";
import {Navbar, Nav} from 'react-bootstrap'

export default function NavbarComponents() {
  return (
    <div>
      <Navbar bg="light" variant="light">
        <Navbar.Brand>Pages</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link><Link to="/Homepage">Homepage</Link></Nav.Link>
          <Nav.Link><Link to="/InsertPage">Insert Page</Link></Nav.Link>
        </Nav>
      </Navbar>
    </div>
  );
}

import React from 'react';
import { Nav, Navbar, Form, FormControl } from 'react-bootstrap';
import styled from 'styled-components';
import { FaGgCircle } from "react-icons/fa";
const Styles = styled.div`
  .navbar {
    background-color: ${(props) => props.theme.navBackground};
    box-shadow: 0px 5px 5px -5px rgba(0, 0, 0, 0.1); /* Updated box-shadow */
  }

  a, .navbar-nav, .navbar-light .nav-link {
    color: ${(props) => props.theme.navText};
    &:hover { color: white; }
  }

  .navbar-brand {
    font-size: 1.4em;
    color: #9FFFCB;
    &:hover { color: white; }
    margin: 0 auto; /* Centering the text */
  }

  .form-center {
    position: absolute !important;
    left: 50%; /* Centering the form */
    transform: translateX(-50%);
  }

  transition: background-color 0.3s, color 0.3s;
`;

export const NavigationBar = () => (
  <Styles>
  <Navbar expand="lg">
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="ml-centre d-flex align-items-center">
        <span style={{ fontSize: '28px', paddingRight: '10px', paddingTop:'5px' }}><FaGgCircle /></span>
        <Nav.Item className='headerNav'><span>EBER</span></Nav.Item>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
</Styles>
);

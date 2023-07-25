import logo from '../../assets/logo.svg';
import { useState } from 'react';
import './NavbarStyles.css';
import { Nav, Navbar } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const MyNavBar = () => {
   return (
      <Navbar collapseOnSelect expand='lg' bg='dark' data-bs-theme='dark'>
         <Navbar.Brand href='#home'>
            <img src={logo} className='app-logo' alt='logo' />
         </Navbar.Brand>
         <Navbar.Toggle aria-controls='responsive-navbar-nav' />
         <Navbar.Collapse id='responsive-navbar-nav'>
            <Nav className='ms-auto'>
               <Nav.Link href='#home' className='navbar-link'>
                  Home
               </Nav.Link>
               <Nav.Link href='#about' className='navbar-link'>
                  About
               </Nav.Link>
               <Nav.Link href='#skills' className='navbar-link'>
                  Skills
               </Nav.Link>
               <Nav.Link href='#projects' className='navbar-link'>
                  Projects
               </Nav.Link>
            </Nav>
         </Navbar.Collapse>
      </Navbar>
   );
};

export default MyNavBar;

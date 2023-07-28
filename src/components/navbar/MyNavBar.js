import logo from '../../assets/logo.svg';
import { useState } from 'react';
import './NavbarStyles.css';
import { Nav, Navbar } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import linkedin from '../../assets/linkedin.svg';
import github from '../../assets/github.svg';
import { SocialAccount } from '../../data/data';

const MyNavBar = () => {
   return (
      <Navbar collapseOnSelect expand='lg'>
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
               <div className='social-icon'>
                  <Nav.Link href={SocialAccount.linkedin}>
                     <img src={linkedin} alt='linkedin-icon' />
                  </Nav.Link>
                  <Nav.Link href={SocialAccount.github}>
                     <img src={github} alt='github-icon' />
                  </Nav.Link>
               </div>
            </Nav>
         </Navbar.Collapse>
      </Navbar>
   );
};

export default MyNavBar;

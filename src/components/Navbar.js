import logo from '../assets/logo.svg';
import { useState } from 'react';
import './NavbarStyles.css';

function Navbar() {
   const [clicked, setClicked] = useState(false);

   const handleClick = () => {
      setClicked(!clicked);
   };

   return (
      <>
         <nav>
            <a href='index.html'>
               {' '}
               <img src={logo} className='App-logo' alt='logo' />
            </a>
            <div>
               <ul
                  id='navbar'
                  className={clicked ? '#navbar active' : '#navbar'}
               >
                  <li>
                     <a className='active' href='index.html'>
                        Home
                     </a>
                  </li>
                  <li>
                     <a href='index.html'>About</a>
                  </li>
                  <li>
                     <a href='index.html'>Skills</a>
                  </li>
                  <li>
                     <a href='index.html'>Projects</a>
                  </li>
               </ul>
            </div>
            <div id='mobile' onClick={handleClick}>
               <i
                  id='bar'
                  className={clicked ? 'fas fa-times' : 'fas fa-bars'}
               ></i>
            </div>
         </nav>
      </>
   );
}

export default Navbar;

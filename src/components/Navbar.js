import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';


function Navbar() {
  const[click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <>
        <nav className='navbar'>
            <div className='navbar-container'>
                <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
                    MahjongPals <i className='fas fa-gamepad' />
                </Link>
                <div className='menu-icon' onClick={handleClick}>
                    <i className={click ? 'fas fa-times' : "fas fa-bars"} />
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className='nav-item'>
                        <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                            Home
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/tutorial' className='nav-links' onClick={closeMobileMenu}>
                            Tutorial
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/rules' className='nav-links' onClick={closeMobileMenu}>
                            Rules
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/quiz' className='nav-links' onClick={closeMobileMenu}>
                            Quiz
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/chipcalculator' className='nav-links' onClick={closeMobileMenu}>
                            Chip Calculator 
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    </>
  )
}

export default Navbar;
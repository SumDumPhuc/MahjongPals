import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { Button } from './Button';


function Navbar() {
  const[click, setClick] = useState(false);
  const[button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if(window.innerWidth <= 960) {
        setButton(false);
    } else {
        setButton(true);
    }
  };

  useEffect(() => {
    showButton()
  }, []);

  window.addEventListener('resize', showButton)

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
                        <Link to='/forum' className='nav-links' onClick={closeMobileMenu}>
                            Forum
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/taicalculator' className='nav-links' onClick={closeMobileMenu}>
                            Tai Calculator 
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/chipcalculator' className='nav-links' onClick={closeMobileMenu}>
                            Chip Calculator 
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/sign-up' className='nav-links-mobile' onClick={closeMobileMenu}>
                            SIGN UP
                        </Link>
                    </li>
                </ul>
                {button && <Button buttonStyle='btn--numbertwo' to='/sign-up'>SIGN UP</Button>}
            </div>
        </nav>
    </>
  )
}

export default Navbar;
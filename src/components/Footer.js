import React from 'react';
import './Footer.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
      <section className='footer-message'>
        <p className='footer-message-heading'>
          Download our mobile app now! Available on Android and IOS.
        </p>
        <p className='footer-message-text'>
          Kindly report any bugs/issues below.
        </p>
        <div className='input-areas'>
          <form>
            <input
              className='footer-input'
              placeholder='Bugs/Issues'
            />
            <Button buttonStyle='btn--outline'>SEND</Button>
          </form>
        </div>
      </section>
      <section className='social-media'>
        <div className='social-media-wrap'>
          <div className='footer-logo'>
            <Link to='/' className='social-logo'>
              MahjongPals
              <i class='fas fa-gamepad' />
            </Link>
          </div>
          <small className='website-rights'>MahjongPals © 2023</small>
          <div className='social-icons'>
            <Link
              className='social-icon-link youtube'
              to='/'
              target='_blank'
              aria-label='Youtube'
            >
              <i className='fab fa-youtube' />
            </Link>
            <Link
              className='social-icon-link apple'
              to='/'
              target='_blank'
              aria-label='Apple'
            >
              <i className='fab fa-apple' />
            </Link>
            <Link
              className='social-icon-link android'
              to='/'
              target='_blank'
              aria-label='Android'
            >
              <i className='fab fa-android' />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
import React from 'react';
import { IoIosAddCircle } from 'react-icons/io';
import './style.css';

const Footer = ({ openModal }) => {
  return (
    <footer className='footer'>
      <button className='icon-btn' onClick={openModal}>
        <IoIosAddCircle size={40} color='var(--g1)' />
      </button>
    </footer>
  );
};

export default Footer;
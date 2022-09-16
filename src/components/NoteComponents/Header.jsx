import React from 'react';
import '../css/Header.css';

function Header() {
  return (
    <div className='header'>
        <h1>Notes</h1>
        <div className='search-bar'>
            <input type="text" placeholder='Search' />
        </div>
    </div>
  )
}

export default Header
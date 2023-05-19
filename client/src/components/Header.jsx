import React from 'react';

import '../css/header.css';

function Header() {
	return (
		<header className='header'>
			<h1 className='header-title'>for the grind</h1>
			<nav className='header-nav'>
				<li>
					<button className='header-nav-button'>Log In</button>
				</li>
				<li>
					<button className='header-nav-button'>Sign Up</button>
				</li>
				<li>
					<button className='header-nav-button'>About</button>
				</li>
			</nav>
		</header>
	);
}

export default Header;

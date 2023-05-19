import '../css/navbar.css';
function Navbar({ pages, updatePage }) {
	return (
		<nav className='navbar'>
			{pages.map((page) => {
				return (
					<li key={page.title}>
						<button className='navbar-button' onClick={() => updatePage(page)}>
							{page.title}
						</button>
					</li>
				);
			})}
		</nav>
	);
}

export default Navbar;

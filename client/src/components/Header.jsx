import '../css/header.css';
import Navbar from './Navbar';

function Header({ pages, updatePage }) {
	return (
		<header className='header'>
			<h1 className='header-title'>for the grind</h1>
			<Navbar pages={pages} updatePage={(page) => updatePage(page)} />
		</header>
	);
}

export default Header;

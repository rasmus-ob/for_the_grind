import { useState } from 'react';
import Content from './components/Content';

import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import Signup from './pages/Signup';

import Footer from './components/Footer';
import Header from './components/Header';
import About from './pages/About';

function App() {
	const [pages, setPages] = useState(
		[
			{ title: 'Home', page: <Home />, config: {} },
			{ title: 'Dashboard', page: <Dashboard />, config: {} },
			{ title: 'Login', page: <Login />, config: {} },
			{ title: 'Signup', page: <Signup />, config: {} },
			{ title: 'About', page: <About />, config: {} },
		].sort((a, b) => (a.title > b.title ? 1 : b.title > a.title ? -1 : 0))
	);

	const [page, setPage] = useState(pages[0]);

	const updatePage = (page) => {
		setPage(page);
	};

	return (
		<div>
			<Header pages={pages} updatePage={(page) => updatePage(page)} />
			<Content page={page} />
			<Footer />
		</div>
	);
}

export default App;

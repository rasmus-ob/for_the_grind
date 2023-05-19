import Content from './components/Content';
import Footer from './components/Footer';
import Header from './components/Header';

function App() {
	return (
		<div>
			<Header />
			<Content pageName={'Example'} />
			<Footer />
		</div>
	);
}

export default App;

import './App.css';
import Nav from './components/Nav';
import AddStock from './components/AddStock';
import RemoveStock from './components/RemoveStock';
import StockLevels from './components/StockLevels';
import Footer from './components/Footer';

function App() {
	return (
		<div className="App">
			<Nav />
			<AddStock />
			<RemoveStock />
			<StockLevels />
			<Footer />
		</div>
	);
}

export default App;

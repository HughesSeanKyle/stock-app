import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

// React Boostrap components
import AddStockRB from './components/AddStockRB';
import RemoveStockRB from './components/RemoveStockRB';
import StockLevelsRB from './components/StockLevelsRB';

// Regular bootstrap components
import Nav from './components/Nav';
// import AddStock from './components/AddStock';
// import RemoveStock from './components/RemoveStock';
// import StockLevels from './components/StockLevels';
import Footer from './components/Footer';

function App() {
	return (
		<div className="App">
			<Nav />
			<AddStockRB />
			<RemoveStockRB />
			<StockLevelsRB />
			<Footer />
		</div>
	);
}

export default App;

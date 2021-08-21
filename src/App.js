import './App.css';
import AddStock from './components/AddStock';
import RemoveStock from './components/RemoveStock';
import StockLevels from './components/StockLevels';

function App() {
  return (
    <div className="App">
      <h1>This is the app component</h1>

      <AddStock />
      <RemoveStock />
      <StockLevels />

    </div>
  );
}

export default App;

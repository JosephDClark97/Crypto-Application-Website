import './App.css';
import Nav from './NavBar/NavBar';
import Charts from './Charts/Charts';
import CoinsList from './CoinsList/CoinsList';
import SubNav from './SubNavBar/SubNav';

function App() {
  return (
    <div className="App">
      <Nav />
      <SubNav />
      <Charts />
      <CoinsList />
    </div>
  );
}

export default App;